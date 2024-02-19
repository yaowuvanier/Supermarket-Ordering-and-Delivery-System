import { Component, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CourseService } from "./course-web.service";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <button class="btn btn-primary">Save</button>

        
        <input (keyup.enter) = "onKeyUp($event)" />
        <br />
        <input #name (keyup.enter) = "onKeyUp2(name.value)" />
        <br />
        <!-- this does not get the real-time keyboard inputting, 
             but the hardcoded value in the 'email' variable -->
        <input [value]="email" (keyup.enter) = "onKeyUp3()" />

        <br/>
        <input [value]="email" (keyup.enter)="onKeyUp4($event)" />

        <br/>


        <!-- another way to bind-->
        <!--- recommand to use this one----->
        <input [(ngModel)]="email"  (keyup.enter) = "onKeyUp3()" />

        <br />
        <!--pipes--->
        showing the information : <br />
        {{ course1.title | uppercase }} <br />
        {{ course1.students | number }} <br />
        {{ course1.rating | number: '2.2-2' }} <br />
        {{ course1.price | currency: 'CAD'  }} <br />
        {{ course1.releaseData | date: 'shortDate'  }} <br />





    `
})

export class CoursewebComponent {
    title = "Lists of courses";
    courses;
    email : string = "exmaple@email.com";
    course1 ={
        title: "formating showing" ,
        rating: 4.9756,
        students: 12345,
        price: 188.88,
        releaseData: new Date (2022,2,22)
    }

    constructor() {
        let service = new CourseService();
        this.courses = service.getCourse();
    }

    getTitle(){
        return this.title;
    }

    // Get the value entered from the keyboard
    onKeyUp(event: any){
        console.log(event.target.value)
    }

    onKeyUp2(name : any){
        console.log('the name is ', name)
    }

    onKeyUp3(){
        console.log(this.email)
    }

    //get form event, then give it to this.
    onKeyUp4(event: any) {
      const target = event.target as HTMLInputElement;
      this.email = target.value;
      console.log(this.email)
      // Rest of your code
    }
}

@NgModule({
    declarations: [CoursewebComponent],
    imports: [CommonModule, FormsModule] //*ngFor,  ngModel
})


export class CoursewebModule {}
