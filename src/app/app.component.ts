import { Component, OnInit } from '@angular/core';
import { contacts } from 'src/assets/contacts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  contact;

  ngOnInit(): void {
    localStorage.getItem('user') ? '' : localStorage.setItem('contacts', JSON.stringify(contacts));
    localStorage.setItem('user', 'true');
  }

  onContactSelected(contact) {
    this.contact = contact;
    console.log('sidebar');
  }
}
