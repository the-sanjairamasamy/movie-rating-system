import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})

export class ModalPopupComponent implements OnInit {
  portal: ComponentPortal<any>;
  constructor(public dialogRef: MatDialogRef<ModalPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.portal = new ComponentPortal(this.data.component);
  }

  save() {
    this.close();
  }

  close() {
    this.dialogRef.close();
  }
}
