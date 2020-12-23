import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Dating App';
  users: any;
  constructor(private http: HttpClient){
  }

// tslint:disable-next-line: use-lifecycle-interface
ngOnInit(): void {
  this.getUsers();
}


  // tslint:disable-next-line:typedef
  getUsers() {
    this.http.get('https://localhost:44363/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    } );
  }
}
