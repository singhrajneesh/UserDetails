import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UserService} from './service/user.service';
import { AppComponent } from './app.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

const appRoutes:Routes=[
  {path:'sidebar',component:SidebarComponent},
  {path:'userdetails',component:UserdetailsComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'',redirectTo:'/sidebar' ,pathMatch:'full'},
  {path:'**',redirectTo:'/sidebar' ,pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    SidebarComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
