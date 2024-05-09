import type { IPokemon } from "pokeapi-typescript";

export interface Pokemon extends Omit<IPokemon, "sprites"> {
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export interface ChainItem {
  id: number;
  name: string;
}

export interface Stats {
  label: string;
  value: number;
}
