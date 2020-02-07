import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './Child/Child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  
  title = 'mdb-angular-free';

  @ViewChild(ChildComponent,{  static: true })
         child;

         messageFromChild="hello";
  constructor() { }

  ngAfterViewInit() {

   // this.messageFromChild=this.child.message;
   // console.log(this.child.message)
  }

}
