import { Component, OnInit } from '@angular/core';
import{UserService} from './../service/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  data:any;
constructor(private userdata:UserService){  }

  getUserdata(){
    this.userdata.getProfile().subscribe((res) =>{
      console.log(res);
   this.data = res;
   }, (error) =>{
   })
  }
  ngOnInit(){
   }
}
