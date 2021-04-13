import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Course } from '@app/_models/course';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CourseService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) {}

    getAll(): Observable<Course[]> {
        return this.http.get<Course[]>(`${environment.apiUrl}/courses`);
    }

    getById(id: string) {
        return this.http.get<Course>(`${environment.apiUrl}/courses/${id}`);
    }

    markAsViewed(courseId: String, sessionId: String) {
        return this.http.put(`${environment.apiUrl}/courses/viewed`, [courseId, sessionId]);
    }
}