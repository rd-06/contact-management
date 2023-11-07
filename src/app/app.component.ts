import { Component, HostListener, OnInit } from '@angular/core';
import { contacts } from 'src/assets/contacts';
import { ScreenSizeService } from './services/screen-size-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  contact: any;
  screenWidth: number;
  listContact: boolean;
  editContact: boolean;


  constructor(private screenSizeService: ScreenSizeService) {

    this.screenSizeService.getScreenWidth().subscribe(width => {
      this.screenWidth = width;
    });

    if (this.screenWidth < 800) {
      this.editContact = true;
    } else {
      this.editContact = false;
      this.listContact = false;
    }
  }

  ngOnInit(): void {
    localStorage.getItem('user') ? '' : localStorage.setItem('contacts', JSON.stringify(contacts));
    localStorage.setItem('user', 'true');


  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenWidth = window.innerWidth;

    if (this.screenWidth < 800) {
      this.editContact = true;
    } else {
      this.editContact = false;
      this.listContact = false;
    }

  }

  onContactSelected(contact) {
    this.contact = contact;

    if (this.screenWidth < 800) {
      this.editContact = false;
      this.listContact = true;
    }

  }

  onCancel() {
    this.editContact = true;
    this.listContact = false;
    if (this.screenWidth > 800) {
      this.editContact = false;
      this.listContact = false;
    }
  }
}
