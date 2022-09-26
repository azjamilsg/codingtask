import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { ContactusComponent } from './contactus/contactus.component';
import { InputComponent } from './shared/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    UserModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
