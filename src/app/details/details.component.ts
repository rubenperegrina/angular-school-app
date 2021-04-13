import { Component, Input, OnInit } from '@angular/core';
import { Course } from '@app/_models/course';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CourseService } from 'src/app/_services/course.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  course: Course;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location
  ) { 
    this.getCourse();
  }

  ngOnInit(): void {
  }

  getCourse(): void {
    const id = this.route.snapshot.params['id'];
    this.courseService.getById(id).subscribe(course => this.course = course);
  }

  goBack(): void {
    this.location.back();
  }

}
