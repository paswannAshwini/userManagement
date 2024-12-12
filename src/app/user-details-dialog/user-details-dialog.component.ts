import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-details-dialog',
  templateUrl: './user-details-dialog.component.html',
  styleUrls: ['./user-details-dialog.component.css']
})
export class UserDetailsDialogComponent {
  userForm: FormGroup; // Form group to handle user details

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private userService: UserService) {
// Initialize the form with the user data passed into the dialog
    this.userForm = new FormGroup({
      firstName: new FormControl(this.data.firstName), // Pre-fill with user's first name
      lastName: new FormControl(this.data.lastName)  // Pre-fill with user's last name
    });
  }


   // Method to update the user details
  updateUser (): void {
    const userId = this.data.userId;  // Get the user's ID
    const user = this.userForm.value;  // Get the updated form values

     // Call the service to update the user details
    this.userService.updateUser (userId, user).subscribe((response) => {
      console.log(response); // Log the response on success
    }, (error:any) => {
      console.error(error);  // Log the error on failure
    });
  }

  // Method to reset the form
  closeDialog(): void {
    this.userForm.reset();  // Reset the form fields
  }
}
