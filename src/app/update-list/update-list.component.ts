import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.scss']
})
export class UpdateListComponent implements OnInit { 
  currentTutorial:any;
  message = '';
  Updated = false;
  Deleted =false;
  constructor( private tutorialService: HttpService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id:any) {
    this.tutorialService.get(id)
      .subscribe(
        res => {
          this.currentTutorial = res;
          console.log(res);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status:any) {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };

    this.tutorialService.update(this.currentTutorial.id, data)
      .subscribe(
        response => {
          this.currentTutorial.published = status;
          this.router.navigate(['/list'])
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial() {
    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
          this.Updated = true;
          this.router.navigate(['/list'])
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial() {
    this.tutorialService.delete(this.currentTutorial.id)
      .subscribe(
        response => {
          console.log(response);
          
          this.message = 'The tutorial was deleted successfully!';
          this.router.navigate(['/list']);
        },
        error => {
          console.log(error);
        });
  }
}
