import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss']
})
export class DesktopMenuComponent implements OnInit {

  constructor(public electronService: ElectronService) { }

  ngOnInit() {
  }

  onClickClose() {
    const window = this.electronService.remote.getCurrentWindow();

    window.close();
  }

  onClickUnmaximize() {
    const window = this.electronService.remote.getCurrentWindow();

    if (!window.isMaximized()) {
      window.maximize();
    } else {
      window.unmaximize();
    }
  }

  onClickMinimize() {
    const window = this.electronService.remote.getCurrentWindow();

    window.minimize();
  }

}
