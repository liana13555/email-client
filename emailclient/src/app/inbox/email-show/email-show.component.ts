import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { switchMap } from "rxjs/operators";
// import { EmailService } from "../email.service";
import { Email } from "../email";

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
  email: Email;

  constructor(
    private route: ActivatedRoute,
    // private emailService: EmailService
  ) { 
    this.email = route.snapshot.data?.['email']
    this.route.data.subscribe(({ email }) => {
      this.email = email            
    })    
  }

  ngOnInit() {   // Extracted all logic to resolver!!!

    // // Cancelling previous email requests
    // this.route.params.pipe(
    //   switchMap(({ id }) => {             // when switchMap see a new value, its going to cancel the old request
    //     return this.emailService.getEmail(id)
    //   })
    // ).subscribe((email) => {
    //   this.email = email
    // })

    
    // this.route.params.subscribe(({ id }) => {
    //   this.emailService.getEmail(id).subscribe(email=> {
    //     console.log(email);
    //   })
    // })

    // console.log(this.route.snapshot.params?.['id']);
    /* Snapshot - simple description of what the URL is 'right now'. If we dont expect the data changes, but if data changes we use Observable */
  }
}

/* params - is BehaviorSubject, that is going to emit values any time the url changes. 
This value is going to capture whatever parameters we specified in our inbox-routing.module.ts 
{ path: ':id', component: EmailShowComponent },
ANGULAR is going to automatically extract some part of your URL into an object that is a key of ID.
*/

