export class User {
	public id?:string;
	public fname:string;
	public lname:string;
	public email:string;
	public password:string;
	public imagePath:string;
	constructor(id?:string,fname:string,lname:string,imagePath:string,email:string,password:number){
		this.id = id;
		this.fname = fname;
		this.lname = lname;
		this.imagePath = imagePath;
		this.password = password;
		this.email = email;
	}
}