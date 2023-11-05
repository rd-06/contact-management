import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnChanges {
  @Input() contact;
  emojiPickerVisible;
  message = '';
  fullName: string = '';
  emailAddress: string = '';
  phoneNumber: number;
  streetAddress: string = '';
  region: string = '';
  postalCode: number;
  constructor() { }

  ngOnChanges(): void {
    this.fullName = this.contact.fullName;
    this.emailAddress = this.contact.emailAddress;
    this.phoneNumber = this.contact.phoneNumber;
    this.streetAddress = this.contact.streetAddress;
    this.region = this.contact.region;
    this.postalCode = this.contact.postalCode;
  }

  onSubmit() {

    if (this.fullName && this.emailAddress && this.phoneNumber && this.streetAddress && this.region && this.region && this.region) {
      console.log('submit');
      this.contact.fullName = this.fullName;
      this.contact.emailAddress = this.emailAddress;
      this.contact.phoneNumber = this.phoneNumber;
      this.contact.streetAddress = this.streetAddress;
      this.contact.region = this.region;
      this.contact.postalCode = this.postalCode;

      const parsedContacts = JSON.parse(localStorage.getItem('contacts'))



      const index = parsedContacts.findIndex((item: any) => item.id === this.contact.id);
      console.log(index);

      // if (index !== -1) {
      parsedContacts[index] = this.contact;
      console.log('in', parsedContacts);
      console.log('this.contact', this.contact);
      // }

      localStorage.setItem('contacts', JSON.stringify(parsedContacts));
    }
  }


}
