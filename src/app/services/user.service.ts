import{Injectable} from '@angular/core';

@Injectable()

export class UserService {
    user : any;

    setUser(newuser){
        this.user = newuser;
    }
    getUser(){
        return this.user;
    }
}
