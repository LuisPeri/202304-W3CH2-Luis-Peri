export class Character {
  tvShow: string;
  name: string;
  house: string;
  age: number;
  status: boolean;
  communicate: any;

  constructor(name: string, house: string, age: number) {
    this.tvShow = "Game of Thrones";
    this.name = name;
    this.house = house;
    this.age = age;
    this.status = true || false;
  }

  endLife() {
    this.status = false;
    return this.status;
  }

  saySentence() {
    return `${this.communicate}`;
  }
}
