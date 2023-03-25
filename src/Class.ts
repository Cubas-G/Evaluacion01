import axios from "axios";
import { PokeAPINidorina } from "./interfaces/PokeApiNidorina";
import { PokeAPINidoqueen, Move } from "./interfaces/PokeApiNidoqueen";

export class Ndorina {
  constructor(public readonly id: number, public name: string) {}



  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeAPINidorina>(
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

export class Ndoqueen {
  constructor(public readonly id: number, public name: string) {}

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeAPINidoqueen>(
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

export const Nidorina = new Ndorina(30, "Nidorina");
console.log(Nidorina.getMoves());

export const Nidoqueen = new Ndoqueen(31, "Nidoqueen");
console.log(Nidoqueen.getMoves());
