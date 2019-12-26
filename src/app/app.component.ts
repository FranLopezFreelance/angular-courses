import { COURSES } from './../db-data';
import { Component } from '@angular/core';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses: Course[] = COURSES;

  onCourseSelected(course: Course){
    console.log(course);
  }
}
