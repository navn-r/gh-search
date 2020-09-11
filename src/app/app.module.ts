import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';


import { MatInputModule } from '@angular/material/input'; 


import { MatCardModule } from '@angular/material/card'; 


import { MatTooltipModule } from '@angular/material/tooltip';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UsersComponent } from './components/users/users.component'; 

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserCardComponent, SearchBarComponent, UsersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
