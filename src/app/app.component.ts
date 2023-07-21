import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  email = '';
  public appPages = [
    { title: 'Home', url: '/menu/home', icon: 'home' },
    { title: 'Bookmarks', url: '/menu/bookmarks', icon: 'bookmarks' },
    { title: 'Forum', url: '/menu/forum', icon: 'chatbubbles' },
    { title: 'Survey', url: '/menu/survey', icon: 'document-text' },
    { title: 'Request', url: '/menu/request', icon: 'share' },
    { title: 'Inbox', url: '/menu/inbox', icon: 'file-tray' },
  ];
  constructor(private router: Router) {
    const storedEmail = localStorage.getItem('useremail');
    if (storedEmail !== null) {
      this.email = storedEmail;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
