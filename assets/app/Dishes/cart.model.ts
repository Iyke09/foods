export class Cart {
	public id:string;
	public name:string;
	public price:string;
	public quantity:number; 
	public imagePath:string;
	constructor(id:string,name:string,imagePath:string,price:string,quantity:number){
		this.id = id;
		this.name = name;
		this.imagePath = imagePath;
		this.price = price;
		this.quantity = quantity;
	}
}