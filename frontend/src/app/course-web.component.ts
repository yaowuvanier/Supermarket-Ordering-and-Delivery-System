import { Component, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CourseService } from "./course-web.service";
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from "./summary.pipe";

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
        <!--- recommand to use this one---two-way binding -->
        <input [(ngModel)]="email"  (keyup.enter) = "onKeyUp3()" />

        <br />
        <!--pipes--->
        showing the information : <br />
        {{ course1.title | uppercase }} <br />
        {{ course1.students | number }} <br />
        {{ course1.rating | number: '2.2-2' }} <br />
        {{ course1.price | currency: 'CAD'  }} <br />
        {{ course1.releaseData | date: 'shortDate'  }} <br />

        <br />
        <!-- a custom pipe --->
        {{ text | summary: 20  }}

        <!--ngSwitch--->
        <div [ngSwitch] = "person.age" style="text-align: center; font-size: 20px;">
            <p *ngSwitchCase="10">the person is 10 years old</p>
            <p *ngSwitchCase="20">the person is 20 years old</p>
            <p *ngSwitchCase="30">the person is 30 years old</p>
            <p *ngSwitchDefault>the person is {{person.age}} years old</p>

        </div>

        <div >
            <label>Enter your age : </label>
            <input type="text" (input)="checkEligiblility()" [(ngModel)="age"]/>
            <div [ngSwitch]="isEligible">
                <p *ngSwitchCase="true">You are eligible to vote</p>
                <p *ngSwitchDefault>You are not eligible to vote</p>
            </div>
        </div>
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
    // for custom pipe
    text = `我们现在为 SML/NJ 提供 Microsoft 安装程序包。
    安装程序包含完整安装，包括
    几乎所有可选组件。（我们只排除
    “mlrisc-tools”和“无处”。）
    
    您可以选择安装目录。默认的
    是 C:\Program Files\SMLNJ。bin目录包含
    sml 命令被添加到默认路径中，但是
    请注意，您需要重新打开命令窗口才能看到
    绑定。SMLNJ_HOME 环境变量也是
    设置为指向安装 SML/NJ 的位置。`

    person = {
        age : 38
    }
   
    age = 0;
    isEligible: boolean = false;
    checkEligiblility(){
        this.isEligible = this.age >= 18;
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
    declarations: [CoursewebComponent , SummaryPipe ], // cause it is a self-define
    imports: [CommonModule, FormsModule] //*ngFor,  ngModel
})


export class CoursewebModule {}
