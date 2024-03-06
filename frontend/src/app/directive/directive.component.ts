import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface empInterface {
  id: number;
  name: string;
  role: string
}

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss'
})
export class DIRECTIVEComponent {
  employeeRole: string =''
  employees = signal<empInterface[]>([
    {id: 1, name: "employeeA", role: 'Admin'},
    {id: 2, name: "employeeB", role: 'HR'},
    {id: 3, name: "employeeC", role: 'Marketing'},
    {id: 4, name: "employeeD", role: 'Developer'},
    {id: 5, name: "employeeE", role: 'Team Lead'}
  ])
}
