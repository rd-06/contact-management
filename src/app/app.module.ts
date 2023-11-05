import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

@NgModule({
  declarations: [AppComponent, SidebarComponent, EditContactComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    PickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
