import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalPopupComponent } from 'src/app/common/components/modal-popup/modal-popup.component';
import { MoviesListViewComponent } from 'src/app/movies/components/list-view/movies-list-view.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public modalDialog: MatDialog) { }

  ngOnInit() {
  }


  loadMovies() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "random-rating-component";
    dialogConfig.height = "700px";
    dialogConfig.width = "1200px";
    dialogConfig.data = {
      component: MoviesListViewComponent
    }
    this.modalDialog.open(ModalPopupComponent, dialogConfig);
  }


}
