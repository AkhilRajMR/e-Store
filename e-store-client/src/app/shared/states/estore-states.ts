import { ReplaySubject } from "rxjs"
import { User } from "src/app/models/user.model";

export class EStoreStates {
    loggedUser = []

    private userDataSource = new ReplaySubject<any>(1);
    onUserDataChanged = this.userDataSource.asObservable();

    updateUserDataSource(user: User) {
        this.userDataSource.next(user);
    }

    updateUser(user: User) {
        this.updateUserDataSource(user)
    }
}
