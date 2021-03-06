import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;
  @Input() cardIndex: number;
  @Output('courseSelected') courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  onCourseViewed(){
    this.courseEmitter.emit(this.course)
  }

  cardClasses(){
    switch(this.course.category){
      case 'BEGINNER':
        return ['beginner'];
      case 'INTERMEDIATE':
        return ['intermediate'];
      case 'ADVANCED':
        return ['advanced'];
      default:
        return ['']
    }
  }

}
