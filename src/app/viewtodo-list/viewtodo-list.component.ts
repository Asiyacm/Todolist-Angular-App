import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewtodo-list',
  templateUrl: './viewtodo-list.component.html',
  styleUrls: ['./viewtodo-list.component.css']
})
export class ViewtodoListComponent {

  constructor(private api:ApiService){

    api.fetchTodo().subscribe(

      (response)=>{

        this.todo=response
      }
    )
  }

  todo:any= []

}
