import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {

  constructor(private api: ApiService) { 
    this.getallnews();
  }
  
  getallnews=()=>{this.api.getNews().subscribe((data)=>{this.addNews=data})}

  addNews:any={}

  ngOnInit(): void {
  }

}
