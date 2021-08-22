import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  showLoaderFull: Subject<boolean> = new Subject<true>();
  showLoaderSmall: Subject<boolean> = new Subject<true>();

  getShowLoader() {
      return this.showLoaderFull.asObservable();
  }
  showPreloader(preloaderType = 'full'): void {
      if (preloaderType === 'full') {
          this.showLoaderFull.next(true);
      } else if (preloaderType === 'small') {
          this.showLoaderSmall.next(true)
      }
  }
  hidePreloader(preloaderType = 'full'): void {
      if (preloaderType === 'full') {
          this.showLoaderFull.next(false);
      } else if (preloaderType === 'small') {
          this.showLoaderSmall.next(false);
      }
  }
}
