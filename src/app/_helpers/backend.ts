import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import Courses from 'src/assets/json/course.json';
import Class from 'src/assets/json/class.json';

//LOCAL STORAGE
let users = JSON.parse(localStorage.getItem('users')) || [];
let user = JSON.parse(localStorage.getItem('user')) || [];

@Injectable()
export class BackendInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {

                // USERS
                case url.endsWith('/users/login') && method === 'POST':
                    return login();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();

                // COURSES
                case url.endsWith('/courses') && method === 'GET':
                    return getCourses();
                case url.match(/\/courses\/\d+$/) && method === 'GET':
                    return getCourseById();
                case url.endsWith('/courses/viewed') && method === 'PUT':
                    return markAsViewed();

                default:
                    return next.handle(request);
            }    
        }

        // USERS
        function login() {
            const { userName, password } = body;
            const user = users.find(x => x.userName === userName && x.password === password);
            if (!user) return error('El suaurio o la contraseña son incorrectos');
            return ok({
                id: user.id,
                userName: user.userName,
                firstName: user.firstName,
                lastName: user.lastName,
                course: user.courses,
                class: user.class,
                token: 'jwt-token'
            })
        }

        function register() {
            const user = body

            if (users.find(x => x.userName === user.userName)) {
                return error('El usuario "' + user.userName + '" ya esta en uso')
            }
            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            user.courses = Courses;
            user.class = Class;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }

        // COURSES
        function getCourses() {
            if (!isLoggedIn()) return unauthorized();
            return ok(Courses);
        }

        function getCourseById() {
            if (!isLoggedIn()) return unauthorized();
            const urlParts = url.split('/');

            const course = user.course.find(x => x.id === urlParts[4]);
            return ok(course);
        }

        function markAsViewed() {
            user.class = [{courseId: body[0], sessionId: body[1]}];
            if(user.course[body[0]-1].completedSessions < user.course[body[0]-1].totalSessions 
                && !user.course[body[0]-1].sessions[body[1]-1].watched) {
                user.course[body[0]-1].completedSessions = user.course[body[0]-1].completedSessions+1;
            }
            user.course[body[0]-1].sessions[body[1]-1].watched = true;

            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(user));

            let newUsers = users;
            for (let i = 0; i < newUsers.length; i++) {
                if(newUsers[i].id == user.id){
                    newUsers.splice(i,1);
                  break;
                }
             }

            newUsers.push(user)
            localStorage.setItem('users', JSON.stringify(newUsers));
            return ok();
        }

        // OTHERS
        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer jwt-token';
        }
    }
}

export const backendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: BackendInterceptor,
    multi: true
};