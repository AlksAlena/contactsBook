import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsInfoComponent } from './contact-details-info.component';

describe('ContactDetailsInfoComponent', () => {
  let component: ContactDetailsInfoComponent;
  let fixture: ComponentFixture<ContactDetailsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
