import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';
import { faWindowMinimize, faWindowMaximize } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss']
})
export class DesktopMenuComponent implements OnInit {

  faWindowMinimize = faWindowMinimize;
  faWindowMaximize = faWindowMaximize;
  faTimes = faTimes;

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
