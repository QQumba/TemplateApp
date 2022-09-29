import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public okResult?: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getOk()
      .pipe(tap((result) => console.log('fetch result:', result)))
      .subscribe((result) => (this.okResult = result));
  }
}
