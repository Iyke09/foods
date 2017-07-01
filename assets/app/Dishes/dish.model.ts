export class Recipe {
	public id?:string;
	public name:string;
	public description:string;
	public price:string;
	public category:string;
	public likes?:number; 
	public imagePath:string;
	constructor(id?:string,name:string,desc:string,imagePath:string,price:string,category:string,likes?:number){
		this.id = id;
		this.name = name;
		this.description = desc;
		this.imagePath = imagePath;
		this.price = price;
		this.category = category;
		this.likes = likes;
	}
}