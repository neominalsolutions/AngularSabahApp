import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularSabahNBuy';
  layoutExist: boolean = true;

  // angularda servisler constructor yazılır. Router ise angularda sayfalar arası yönledirme yapmamızı sağlayan bunları kontrol eden servisimizidir.
  constructor(private router: Router) {}

  routeListener() {
    this.router.events.subscribe((event) => {
      // console.log('event', event);

      // NavigationStart olan event girildiğinde
      if (event instanceof NavigationStart) {
        // console.log('start', event);

        if (event.url == '/login') {
          this.layoutExist = false;
        } else {
          this.layoutExist = true;
        }
      }
    });
  }

  ngOnInit(): void {
    // component ilk doma basıldığında çalır.
    // bu serviste eventleri dinledik.
    // NavigationStart NavigationEnd gibi bir sayfaya route isteği başladığında veya bittiğinde çalışan eventleri yakaladık.

    this.routeListener();
  }
}
