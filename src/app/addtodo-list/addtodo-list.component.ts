import { Component } from '@angular/core';

@Component({
  selector: 'app-addtodo-list',
  templateUrl: './addtodo-list.component.html',
  styleUrls: ['./addtodo-list.component.css']
})
export class AddtodoListComponent {

  userId=""
  id=""
  title=""
  completed=""


  addTodo=()=>
  {
    let add:any=
    
      {"userId":this.userId,"id":this.id,"title":this.title,"completed":this.completed}
    
    console.log(add)
    
  }

}
