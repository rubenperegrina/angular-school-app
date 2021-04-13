import { Component, OnInit } from '@angular/core';
import { Course } from '@app/_models/course';
import { Session } from '@app/_models/session';
import { Class } from '@app/_models/class'
import { AccountService } from 'src/app/_services/account.service'
import { Subscription } from 'rxjs';
import { User } from '@app/_models/user';

@Component({ 
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    user: User;
    course: Course;
    class: Class;
    hasCourse: Boolean = false;
    activeCourse: Course;
    activeSession: Session;
    activeCourseId: String;
    activeSessionId: String;
    accountSubscription: Subscription;

    constructor(
        private accountService: AccountService
        ) {
          const user = this.accountService.userValue;
          this.user = user;
          this.course = user.course;
          this.class = user.class;

          this.hasActiveCourse(this.class)
          if(this.hasCourse){
            this.activeCourse = this.getActiveCourse(this.class, this.course);
            this.activeSession = this.getActiveSession(this.class, this.course);
          } else {
            this.activeCourse = null;
            this.activeSession = null;
          }
        }

    ngOnInit() {
    }

    public hasActiveCourse(cl){
      cl[0].courseId? this.hasCourse = true : this.hasCourse = false;
    }
  
    public getActiveCourse(cl, c) : Course{
      let item = c.find(course => course.id == cl[0].courseId)
      return item;
    }
  
    public hasActiveSession(cl) : Boolean{
      return cl[0].sessionId? true : false;
    }
  
    public getActiveSession(cl, c) : Session{
      let activeCourse = c.find(course => course.id == cl[0].courseId);
      let activeSession = activeCourse.sessions.find(session => session.id == cl[0].sessionId);
      this.activeCourseId = cl[0].courseId;
      this.activeSessionId = cl[0].sessionId;
      return activeSession;
    }
}