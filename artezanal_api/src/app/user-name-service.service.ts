import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserNameService {
  private userNameSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  userName$ = this.userNameSubject.asObservable();

  setUserName(userName: string) {
    this.userNameSubject.next(userName);
  }
}
