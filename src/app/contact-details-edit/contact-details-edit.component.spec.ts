import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsEditComponent } from './contact-details-edit.component';

describe('ContactDetailsEditComponent', () => {
  let component: ContactDetailsEditComponent;
  let fixture: ComponentFixture<ContactDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
