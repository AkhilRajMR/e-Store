import { ReplaySubject } from "rxjs"
import { User } from "../models/user.model";

export class EStoreState {
  loggedUser = []

  private userDataSource = new ReplaySubject<any>(1);
  onUserDataChanged = this.userDataSource.asObservable();

  updateUserDataSource(user: User) {
    this.userDataSource.next(user);
  }

  updateUser(user: any) {
    this.updateUserDataSource(user)
  }
}
