import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Contact } from '../shared/contact';
import { ContactService } from '../services/contact.service'; 

@Component({
  selector: 'app-contact-details-info',
  templateUrl: './contact-details-info.component.html',
  styleUrls: ['./contact-details-info.component.scss']
})
export class ContactDetailsInfoComponent implements OnInit, OnDestroy {
  id: number;
  contact: Contact;
  routeSubscription: Subscription;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.parent.params
      .pipe(switchMap((params: Params) => {
        this.id = +params['id'];
        return of(this.contactService.getContact(+params['id']));
      }))
      .subscribe(contact => this.contact = contact);      
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
  
}
