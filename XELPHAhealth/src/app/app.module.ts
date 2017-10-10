import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatListModule
,MatSidenavModule} from '@angular/material';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';


const routes: Routes = [
  { path: '', component: DashBoardComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatListModule,MatSidenavModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
