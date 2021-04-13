import { Component, Input, OnInit } from '@angular/core';
import { Course } from '@app/_models/course';
import { Session } from '@app/_models/session';

@Component({
  selector: 'app-watch-again',
  templateUrl: './watch-again.component.html',
  styleUrls: ['./watch-again.component.scss']
})
export class WatchAgainComponent implements OnInit {

  @Input() activeCourse: Course;
  @Input() activeSession: Session;
  @Input() activeCourseId?: String;
  @Input() activeSessionId?: String;

  constructor() { }

  ngOnInit(): void {
  }

}
