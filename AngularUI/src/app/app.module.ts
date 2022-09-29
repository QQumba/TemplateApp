import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AtInputComponent } from './layout/at-input/at-input.component';
import { ComponentsDemoComponent } from './layout/components-demo/components-demo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AtFormGroupComponent } from './layout/at-form-group/at-form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AtInputComponent,
    ComponentsDemoComponent,
    AtFormGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
