import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Contact } from '../shared/contact';
import { ContactService } from '../services/contact.service'; 

@Component({
  selector: 'app-contact-details-edit',
  templateUrl: './contact-details-edit.component.html',
  styleUrls: ['./contact-details-edit.component.scss']
})
export class ContactDetailsEditComponent implements OnInit, OnDestroy {
  id: number;
  contact: Contact;
  routeSubscription: Subscription;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.parent.params
      .pipe(switchMap((params: Params) => {
        this.id = +params['id'];
        return of(this.contactService.getContact(+params['id']));
      }))
      .subscribe(contact => this.contact = contact);      
  }

  save(contact: Contact): void {
    this.contactService.saveContact(contact);
    this.router.navigate(['']);
  }
  
  goBack(): void {
    this.location.back();
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
