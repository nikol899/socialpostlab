import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
@Output() onSubmit = new EventEmitter<any>();

constructor() { }
  submitForm(form):void{
    this.onSubmit.emit(form);
   }
   
  ngOnInit() {
  }

}
