import { Component, Input, OnInit } from '@angular/core';
import { Course } from '@app/_models/course';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.scss']
})
export class SessionsListComponent implements OnInit {

  @Input() course: Course;
  courseId: String;

  constructor() { }

  ngOnInit(): void {
    this.courseId = this.course.id;
  }

}
