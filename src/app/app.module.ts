import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WelcomeComponent,
    ListComponent,
    DetailsComponent,
    AdminComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
