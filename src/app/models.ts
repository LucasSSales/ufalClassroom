export class User{
    username:string;
    email:string;
    first_name:string;
    last_name:string;
    password:string;

    /*constructor(username:string, email:string, firstname:string, lastname:string){
        this.username = username;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
    }*/
}

export class Token{
    token:string

    constructor(token:string){
        this.token = token
    }
}


export class Classes{
    list:any[]
}