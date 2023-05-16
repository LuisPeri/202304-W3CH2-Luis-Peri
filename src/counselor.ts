import { Character } from "./character.js";

export class Counselor extends Character {
  characterAdvised: string;
  communicate: any;
  constructor(
    name: string,
    house: string,
    age: number,
    characterAdvised: string
  ) {
    super(name, house, age);
    this.characterAdvised = characterAdvised;
    this.communicate = "I think I'll be dying soon";
  }
}
