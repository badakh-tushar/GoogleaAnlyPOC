import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
declare gtag : Function;

  constructor(){
    this.gtag('event','screen_view',{
      'screen_name' : 'Student'
    });
  }

}
 