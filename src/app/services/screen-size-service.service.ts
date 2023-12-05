import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private screenWidth = new BehaviorSubject<number>(window.innerWidth);

  constructor() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event): void {
    this.screenWidth.next(window.innerWidth);
  }

  getScreenWidth() {
    return this.screenWidth.asObservable();
  }
}
