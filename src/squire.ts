import { Character } from "./character.js";

export class Squire extends Character {
  knight: string;
  pelotismo: string;

  constructor(
    name: string,
    house: string,
    age: number,
    knight: string,
    pelotismo: string
  ) {
    super(name, house, age);
    this.knight = knight;
    this.pelotismo = pelotismo;
    this.communicate = "I'm a loser";
  }
}
