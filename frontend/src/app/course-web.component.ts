import { Component, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

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
    courses = ['course1', 'course2', 'course3'];

    getTitle() {
        return this.title;
    }
}

@NgModule({
    declarations: [CoursewebComponent],
    imports: [CommonModule]
})
export class CoursewebModule {}
