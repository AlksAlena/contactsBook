import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { ContactService } from '../services/contact.service';
import { Contact } from '../shared/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  searchContacts$: Observable<Contact[]>;
  subscription: Subscription;
  private searchTerms = new Subject<string>();

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.subscription = this.contactService.getContacts()
      .subscribe(data => {
        this.contacts = data;
      });
    this.searchContacts$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.contactService.getSearchContacts(term))
    );
  }
  
  // Push a search term into the observable stream
  search(term: string): void {
    if (!term.trim()) return;
    this.searchTerms.next(term.toLowerCase());
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
    // console.log('unsubscribe!');
  }
}
