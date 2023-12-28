import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

declare var gtag: Function;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GoogleaAnlyPOC';

  constructor(private router: Router) {
    this.router.events.pipe(filter((event : any) => event instanceof NavigationEnd))
    .subscribe((event : NavigationEnd) => {
        gtag('config', 'G-HVQQLLQ3LR',
            {
                'page_path': event.urlAfterRedirects,
                'page_view': event.urlAfterRedirects
            }
        );
    });
  }
  
//   ngOnInit() {
//     this.setUpAnalytics();
//   }

//   setUpAnalytics() {
//     this.router.events.pipe(filter((event : any) => event instanceof NavigationEnd))
//         .subscribe((event : NavigationEnd) => {
//             gtag('config', 'G-HVQQLLQ3LR',
//                 {
//                     'page_path': event.urlAfterRedirects
//                 }
//             );
//         });
// }
}
