import { Component, OnInit } from '@angular/core';
import { CourseService } from '@app/_services/course.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  courseId: String;
  sessionId: String;

  constructor(
    private router: Router,
    private courseService: CourseService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getClass();
  }

  getClass() {
    this.courseId = this.route.snapshot.params['courseId'];
    this.sessionId = this.route.snapshot.params['sessionId'];
  }
  markAsViewed() {
    this.courseService.markAsViewed(this.courseId, this.sessionId)
    .pipe(first())
    .subscribe(
        data => {
        });
  }
}
