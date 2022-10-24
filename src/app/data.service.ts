import { Injectable } from '@angular/core';
export interface IUser{
  IdUser:number,
  name:string,
  mail:  string,
  password:string,
  contact:string,
  sexe:string
}
// Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}

// Product Interface
export interface IAnnonce {
  id: number,
  name: string,
  age: string,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
users!:[IUser]
  constructor() { }
register(body:any){
  let users=this.getUsers()
  let lastId=users.length
  let user={
    IdUser:lastId+1,
    name:body.name,
    mail:body.mail,
    password:body.password,
    contact:body.contact,
    sexe:body.sexe
  }
  users.push(user)
  return users;
}
login(body) {

}

getUsers(){
  let Users= [];
  let user1={
    IdUser:1,
    name:"Ibtissem",
    mail:"aloui",
    password:"123456789",
    contact:"2130000",
    sexe:"f"
  }
  let user2={
    IdUser:2,
    name:"nourhen",
    mail:"aloui",
    password:"123456789",
    contact:"2130000",
    sexe:"f"
  }
  Users.push(user1,user2)
  return Users;

 }


  getCategories() {
    let categories = [];

    let cat1: ICategory = {
      id: 1,
      name: 'People',
      image: '../../assets/categories/cat1.jpg'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Animals',
      image: '../../assets/categories/cat2.jpg'
    }


    categories.push(cat1, cat2);

    return categories;
  }

  getAnnonces() {
    let items = [];

    let item1: IAnnonce = {
      id: 1,
      name: 'Ibtissem Aloui',
      age: '26 ans',
      image: '../../assets/products/prod1.jfif'
    }
    let item2: IAnnonce = {
      id: 2,
      name: 'chat',
      age: '2 mois',
      image: '../../assets/products/prod2.jpg'
    }
    let item3: IAnnonce = {
      id: 3,
      name: 'skon',
      age: '6 ans',
      image: '../../assets/products/prod3.jpg'
    }
    let item4: IAnnonce = {
      id: 4,
      name: 'Kais Talbi',
      age: '70 ans',
      image: '../../assets/products/prod4.jpg'
    }
    let item5: IAnnonce = {
      id: 5,
      name: 'Mouadh Belgasmi ',
      age: '29 ans',
      image: '../../assets/products/prod5.jfif'
    }
    let item6: IAnnonce = {
      id: 6,
      name: 'Eya Malekh ',
      age: '24 ans',
      image: '../../assets/products/prod6.jfif'
    }
   

    items.push(item1, item2, item3,item4,item5,item6);

    return items;
  }

  getBestAnnonces() {
    let items = [];

    let item1: IAnnonce = {
      id: 1,
      name: ' Kais Talbi',
      age: '70 ans',
      image: '../../assets/products/prod4.jpg'
    }
    let item2: IAnnonce = {
      id: 2,
      name: 'Hesky',
      age: '1 ans',
      image: '../../assets/products/prod5.jpg'
    }
    let item3: IAnnonce = {
      id: 1,
      name: 'Mohamed  Ben youssef',
      age: '53 ans',
      image: '../../assets/products/prod6.jpg'
    }
    let item4: IAnnonce = {
      id: 1,
      name: 'Mouadh   Belgasmi',
      age: '29 ans',
      image: '../../assets/products/prod5.jfif'
    }
    

    items.push(item1, item2, item3,item4);

    return items;
  }
}
