import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  // Import the UserService to fetch user data
import {UserDetailsDialogComponent} from '../user-details-dialog/user-details-dialog.component' // Dialog component for displaying user details
import { MatDialog } from '@angular/material/dialog'; // Import Angular Material dialog module

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = []; // Array to store the list of users
  data : any = {
    memberCount: 3, // Number of members (for local data)
    members: [
    {
    user: {
    created: '2022-03-14T12:29:27.446531Z',
    email: 'hermann@supercomp.com',
    firstName: 'hermann',
    lastName: 'mustermann',
    userId: 'e0250d1c-773e-4f6c-a64d-11587488e222'
    }
    },
    {
    user: {
    created: '2022-03-14T10:49:55.143462Z',
    email: 'klaus@supercomp.com',
    firstName: 'klaus',
    lastName: 'mustermann',
    userId: 'c9a228e9-47dd-4082-bdca-4de48d0c0916'
    }
    },
    {
    user: {
    created: '2022-03-14T10:49:55.143462Z',
    email: 'fritz@supercomp.com',
    firstName: 'fritz',
    lastName: 'mustermann',
    userId: 'c9a228e9-47dd-4082-bdca-4de48d0c0916'
    }
    }
    ]}


  constructor(private userService: UserService ,private dialog: MatDialog) { }

  ngOnInit(): void {
  this.allUserListing(); // Fetch the user list when the component initializes
  }

  allUserListing(){
    this.userService.getUsers().subscribe((result)=>{
      // this.users = result.data.members.map((member: any) => member.user);
    })
     // For now, use local data to populate the users array
    this.users = this.data.members.map((member: any) => member.user);
  }

   // Open a dialog to display user details
  openUserDetails(user: any): void {
    this.dialog.open(UserDetailsDialogComponent, {
      data: user, // Pass the selected user data to the dialog
    });
  }

}