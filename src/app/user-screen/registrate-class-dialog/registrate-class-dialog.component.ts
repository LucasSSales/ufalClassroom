import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registrate-class-dialog',
  templateUrl: './registrate-class-dialog.component.html',
  styleUrls: ['./registrate-class-dialog.component.css']
})
export class RegistrateClassDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RegistrateClassDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
