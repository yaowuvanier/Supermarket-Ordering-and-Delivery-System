import { CoursewebModule } from './../course-web.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorService } from '../author.service';
import { FormsModule } from '@angular/forms';  // for form
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss'
})

export class AuthorsComponent {
  title = 'Authors'
  authors
  colSpan = 4
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

  constructor( service : AuthorService){
      this.authors = service.getAuthors()
  }

  getTitle(){
    return this.title
  }

}

