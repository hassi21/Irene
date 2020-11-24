import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface LogginginData{

  name: string,
  pass: string,

}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  userLogin = false;
  constructor(public dialog: MatDialog) {  
  }

  openDialog(): void{
    const dailogRef = this.dialog.open(LoginModal, {
      width: '250px',
      height:'250px',
      data: {}
    });
    dailogRef.afterClosed().subscribe(result=>{

      console.log('The Login dailog has been closed with data ',result);

    });
  }

  ngOnInit() {
  

  }
  

}

@Component({
  selector:'login-modal',
  templateUrl:'./loginModal.html',
})
export class LoginModal {
  constructor(
    public dialogRef: MatDialogRef<LoginModal>,
    @Inject(MAT_DIALOG_DATA) public data: LogginginData){}
    onNoClick(): void{
      this.dialogRef.close();
    }
}