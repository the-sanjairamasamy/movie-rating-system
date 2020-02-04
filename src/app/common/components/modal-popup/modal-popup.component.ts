import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComponentPortal, CdkPortalOutlet } from '@angular/cdk/portal';
import {Router} from '@angular/router';
@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})

export class ModalPopupComponent implements OnInit {
  portal: ComponentPortal<any>;

  constructor(public dialogRef: MatDialogRef<ModalPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any,   private router: Router) { }

  ngOnInit() {
    this.portal = new ComponentPortal(this.data.component);
  }

  close() {
    this.dialogRef.close();
    this.router.navigate(['/Home'])
  }
}
