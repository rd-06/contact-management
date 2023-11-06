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


  constructor(private screenSizeService: ScreenSizeService) { }

  ngOnInit(): void {
    localStorage.getItem('user') ? '' : localStorage.setItem('contacts', JSON.stringify(contacts));
    localStorage.setItem('user', 'true');


    // this.screenSizeService.getScreenWidth().subscribe(width => {
    //   this.screenWidth = width;
    //   console.log(this.screenWidth);
    //   // You can now use this.screenWidth in your component to react to screen size changes.
    // });

  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenWidth = window.innerWidth; // Update the screenWidth property when the window is resized.
    console.log(this.screenWidth);

    if (this.screenWidth < 800) {
      this.editContact = true;
    } else {
      this.editContact = false;
      this.listContact = false;
    }
    console.log(this.listContact, this.editContact);

  }

  onContactSelected(contact) {
    this.contact = contact;
    console.log('sidebar');

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
