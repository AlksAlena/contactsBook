import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Contact } from '../shared/contact';
 
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  /*
   * If the storage is empty, load the data from the server, 
   * otherwise download from the LocalStorage
   */
  getContacts(): Observable<Contact[]> {
    let storedContacts = this.downloadFromLocalStorage('contacts');
    if (storedContacts) return of(Object.values(storedContacts));
    else return this.http.get<Contact[]>('http://demo.sibers.com/users')
      .pipe(map(contacts => {
        contacts.forEach(contact => this.saveContact(contact));
        return contacts;
      }
    ));
  }

  /*
   * Get contacts object, transform to array and return particular contact
  */
  getContact(id: number): Contact {
    let storedContacts = this.downloadFromLocalStorage('contacts');
    if (!storedContacts) return;
    else {
      let contacts = Object.values(storedContacts);
      return contacts[id];
    }    
  }

  /*
   * Get contacts object and adds changed contact,
   * upload to LocalStorage
  */
  saveContact(contact: Contact): void {
    let storedContacts = this.downloadFromLocalStorage('contacts');
    if (!storedContacts) {
      storedContacts = {};
      storedContacts[contact.id] = contact;
    } else {
      storedContacts[contact.id] = contact;
    }
    this.uploadToLocalStorage('contacts', storedContacts);
  }

  getSearchContacts(name: string): Observable<Contact[]> {
    let storedContacts = this.downloadFromLocalStorage('contacts');
    let results = [];
    if (!storedContacts) return;
    else {
      results = Object.values(storedContacts)
        .filter(item => item.name.toLowerCase().includes(name));
    }
    return of(results);
  }

  private downloadFromLocalStorage(key: string): object {
    let value = JSON.parse(localStorage.getItem(key))
    return value;
  }

  private uploadToLocalStorage(key: string, value: any): void {
    let serialValue = JSON.stringify(value);
    localStorage.setItem(key, serialValue);
  }
}
