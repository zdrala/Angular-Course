import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-directives',
  templateUrl: './assignment-directives.component.html',
  styleUrls: ['./assignment-directives.component.css']
})
export class AssignmentDirectivesComponent implements OnInit {
showSecret=false;

logs =[];
  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails(){
    this.showSecret=!this.showSecret;
    // this.logs.push(this.logs.length+1);
    this.logs.push(new Date());
  }
}
