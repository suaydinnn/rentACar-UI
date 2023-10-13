import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './component/navi/navi.component';
import { Not404Component } from './component/not404/not404.component';




@NgModule({
  declarations: [
    NaviComponent,
    Not404Component
    
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NaviComponent,
    Not404Component
   
  ]
})
export class SharedModule { }
