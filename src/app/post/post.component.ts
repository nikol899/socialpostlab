import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Postblueprint } from '../postblueprint';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
  
})
export class PostComponent implements OnInit {
@Input() posts: Postblueprint[];

@Output() onRemovePost= new EventEmitter<any>();
  constructor() {}
removePost(index){
  this.onRemovePost.emit(index);
  console.log(index);
}

  ngOnInit() {
  }

}
