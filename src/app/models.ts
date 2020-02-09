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

export class Question{
    forum:number;
    question:string;

    constructor(forum, question){
        this.forum = forum;
        this.question = question;
    }
}

export class Comentary{
    question:number;
    comentary:string;
}

export class Forum{
    id:number;
    name:string;
    questions:QuestionsSaved[];
}

export class QuestionsSaved{
    id: number
    Owner: Owner
    owner:number
    question: string
    pubDate: string
    answears: Comentary[]

}

export class Owner{
    username: string
    first_name: string
    last_name: string
}

export class Answear{
    id: number;
    owner: number;
    Owner:Owner;
    question: number;
    comentary: string;
    pubDate: string;
    
}

export class Post{
    id:number;
    text:string;
    pubDate:string;
    files:File[]
}

export class Activity{
    id: number;
    classroom: number;
    text: string;
    pubDate: string;
    deadline: string;
}

export class Classroom{
    Owner:Owner;
    Forum:Forum;
    name:string;
    uniqueCode:string;
    users:User[];
    posts:Post[];
    activities:Activity[];
}