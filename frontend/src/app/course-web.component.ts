import { Component, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CourseService } from "./course-web.service";

@Component({
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursewebComponent {
    title = "Lists of courses";
    courses;

    constructor() {
        let service = new CourseService();
        this.courses = service.getCourse();
    }

    getTitle(){
        return this.title;
    }
}

@NgModule({
    declarations: [CoursewebComponent],
    imports: [CommonModule]
})
export class CoursewebModule {}
