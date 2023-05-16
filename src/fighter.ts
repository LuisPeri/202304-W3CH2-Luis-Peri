import { Character } from "./character.js";

export class Fighter extends Character {
  weapon: string;
  skills: string;

  constructor(
    name: string,
    house: string,
    age: number,
    weapon: string,
    skills: string
  ) {
    super(name, house, age);
    this.weapon = weapon;
    this.skills = skills;
    this.communicate = "First hit, then ask";
  }
}
