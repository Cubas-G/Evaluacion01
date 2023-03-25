import axios from "axios";
import { PokeAPIMachoke } from "./interfaces/PokeApiMachoke";
import { PokeAPIBlastoise, Move } from "./interfaces/PokeApiBlastoise";

export class Mchoke{
  constructor(public readonly id: number, public name: string) {}



  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeAPIMachoke>(
      " https://pokeapi.co/api/v2/pokemon/67"
    );
    console.log(data.moves[0].move.name);

    console.log(
      `Hola! yo soy: ${data.name} y soy un pokemon de
      ,${data.types[0].type.name} y mi tercer movimiento es:
       ${data.moves[2].move.name} y tengo la habilidad de ${data.abilities[0].ability.name}`
    );

    return data.moves;
  }
}

export class Blstoise {
  constructor(public readonly id: number, public name: string) {}

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeAPIBlastoise>(
      "https://pokeapi.co/api/v2/pokemon/9"
    );
    console.log(data.moves[0].move.name);

    console.log(
      `Hola! yo soy: ${data.name} y soy un pokemon de
      ,${data.types[0].type.name} y mi ultimo movimiento es:
       ${data.moves[105].move.name} y tengo la habilidad de ${data.abilities[0].ability.name}`
    );

    return data.moves;
  }
}

export const Machoke = new Mchoke(67, "Machoke");
console.log(Machoke.getMoves());

export const Blastoise = new Blstoise(9, "Blastoise");
console.log(Blastoise.getMoves());
