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
  userForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private userService: UserService) {

    this.userForm = new FormGroup({
      firstName: new FormControl(this.data.firstName),
      lastName: new FormControl(this.data.lastName)
    });
  }

  updateUser (): void {
    const userId = this.data.userId;
    const user = this.userForm.value;
    this.userService.updateUser (userId, user).subscribe((response) => {
      console.log(response);
    }, (error:any) => {
      console.error(error);
    });
  }

  closeDialog(): void {
    this.userForm.reset();
  }
}
