import { Routes } from '@angular/router';

import { ContactsComponent } from '../contacts/contacts.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { ContactDetailsEditComponent } from '../contact-details-edit/contact-details-edit.component';
import { ContactDetailsInfoComponent } from '../contact-details-info/contact-details-info.component';
// import { NotFoundComponent } from '../not-found/not-found.component';
const itemRoutes: Routes = [
  { path: 'info', component: ContactDetailsInfoComponent },
  { path: 'edit', component: ContactDetailsEditComponent }
];

export const routes: Routes = [
  { path: 'home',  component: ContactsComponent },
  { path: 'contactdetails/:id',  component: ContactDetailsComponent },
  { path: 'contactdetails/:id',  component: ContactDetailsComponent, children: itemRoutes },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', component: NotFoundComponent }
];