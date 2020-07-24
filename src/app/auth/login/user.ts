export class User{

    name: string;
    email :string;
    group : string;
    password : string;

   
    public constructor(name : string, email : string, group : string, password :string){
        this.name = name;
        this.email = email;
        this.group = group;
        this.password = password;
    }

}