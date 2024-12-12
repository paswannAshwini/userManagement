import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component'; // Component to display the list of users
import { UserDetailsDialogComponent } from './user-details-dialog/user-details-dialog.component'; // Dialog component to display user details
import { MatDialogModule } from '@angular/material/dialog'; // Angular Material module for dialogs
import { ReactiveFormsModule } from '@angular/forms'; // For building reactive forms
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
