import { Component, OnInit } from '@angular/core';
import { Postblueprint } from '../postblueprint';

@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
  
})
export class SocialPostsComponent implements OnInit {
  show:boolean=false;

  posts: Postblueprint[]=[{
    title:"Tacos",
    comment:"Tacos are yummy"
  },
  {
    title:"Dog",
    comment:"Dog dog dog dog dog dog "
  }
];
  constructor() { }
  submitted(form):void{
    console.log(this.posts);
    console.log(form);
    this.posts.unshift({
      title:form.value.title,
      comment:form.value.comment
  });
  this.show=false;
  }
  removePost(index):void{
    console.log(index);
    this.posts.splice(index,1);
  }
  toggleForm(){
    this.show=!this.show;
  }
  ngOnInit() {
  }

}
