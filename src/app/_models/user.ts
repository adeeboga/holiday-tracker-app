import { TypeUsers } from './typeUsers.enum';
import { Teams } from './teams.enum';


export class User {

    public email: string;
    public password: string;
    public userType: TypeUsers;
    public team: Teams;


    constructor(email: string, password: string, userTypes?: TypeUsers, team?: Teams ){
        this.email = email ;
        this.password = password;
        this.userType = userTypes || TypeUsers.User;
        this.team = team || Teams.Test;
        
    }
}