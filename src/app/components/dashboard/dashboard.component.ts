import { Component, inject, signal } from '@angular/core';
import { Course, CourseService } from '../../services/course.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private service : CourseService = inject(CourseService);
  courses= signal <Course[]>([]);

  ngOnInit(){
    this.service.getCourses().subscribe({
      next: values=>{this.courses.set(values)},
      error: err=>{console.log(err)}
    });
  }

}
