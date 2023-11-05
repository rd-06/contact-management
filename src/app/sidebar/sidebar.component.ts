import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { contacts } from 'src/assets/contacts';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnChanges {
  @Output() contactClicked: EventEmitter<any> = new EventEmitter();
  searchText: string;
  profile: any;



  get filteredContacts() {
    return contacts.filter((contact) => {
      return (
        contact.fullName
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        contact.phoneNumber.toLocaleString()
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        contact.emailAddress
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        contact.streetAddress
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        contact.region
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        contact.postalCode
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      );
    });
  }

  constructor() {
    this.profile = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('contacts')) : contacts;
  }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
