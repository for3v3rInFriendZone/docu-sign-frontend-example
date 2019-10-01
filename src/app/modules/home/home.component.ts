import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService, RequestDocuSign } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  loading: boolean = false;
  firstname: string;
  lastname: string;
  email: string;

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToUrl() {
    this.loading = true;

    const request = <RequestDocuSign>{
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email
    };

    this.homeService.postDocument(request)
      .subscribe(response => {
        if (response.redirectUrl) {
          this.router.navigate(['/signing'], {
            state: {
              data: {
                redirectUrl: response.redirectUrl
              }
            }
          });
        } else {
          this.loading = true;
        }
      },
        error => {
          this.loading = false;
          console.log(error);
        });
  }

}
