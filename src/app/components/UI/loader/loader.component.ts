import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  showloader = false;

  constructor(
    public loaderService: LoaderService,
    private cd: ChangeDetectorRef
  ) { }
 
  ngOnInit(): void {
    this.loaderService
      .getShowLoader()
      .subscribe(res => ((this.showloader = res), this.detectChanges()));
  }

  detectChanges() {
    if (!this.cd['destroyed']) {
      this.cd.detectChanges();
    }
  }

}
