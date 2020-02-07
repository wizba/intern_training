import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../Services/Github.service';

@Component({
  selector: 'app-Child',
  templateUrl: './Child.component.html',
  styleUrls: ['./Child.component.css']
})
export class ChildComponent implements OnInit {

  message = 'changed child';
constructor(private githubService:GithubService) { }

  ngOnInit() {

    this.githubService.fetchData().subscribe(data=>{
      console.log(data[5].avatar_url);
  
    });
    
  }

}
