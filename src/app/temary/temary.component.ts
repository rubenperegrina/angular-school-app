import { Component, Input, OnInit } from '@angular/core';
import { Course } from '@app/_models/course';

@Component({
  selector: 'app-temary',
  templateUrl: './temary.component.html',
  styleUrls: ['./temary.component.scss']
})
export class TemaryComponent implements OnInit {

  @Input() course: Course;

  constructor() { }

  ngOnInit(): void {
  }

}
