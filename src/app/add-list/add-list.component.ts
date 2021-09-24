
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {
  tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;
  constructor( private http: HttpService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveTutorial() {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.http.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/list'])
        },
        error => {
          console.log(error);
        });
  }

  newTutorial() {
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }
}
