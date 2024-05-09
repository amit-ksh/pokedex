import { ref, watch } from "vue";
import { acceptHMRUpdate, defineStore } from "pinia";
import { API_URL } from "../constants";
import type { ChainItem, Pokemon, Stats } from "../types/pokemon";

export const usePokedexStore = defineStore("pokedex", () => {
  const count = ref(1);
  const pokemonDetails = ref<Pokemon | null>(null);
  const evolutionChain = ref<ChainItem[]>([]);
  const types = ref<string[]>([]);
  const weaknesses = ref<string[]>([]);
  const stats = ref<Stats[]>([]);
  const colorPalette = ref<[number, number, number]>([0, 0, 0]);

  const increment = () => (count.value += 1);
  const decrement = () => (count.value -= 1);

  const setPokemon = async (id: number) => {
    // POKEMON
    pokemonDetails.value = (await fetch(
      `${API_URL}?method=get_pokemon&id=${id}`
    ).then((res) => res.json())) as Pokemon;

    // EVOLUTION CHAIN
    evolutionChain.value = (await fetch(
      `${API_URL}?method=get_evolution_chain&id=${id}`
    ).then((res) => res.json())) as ChainItem[];

    // TYPES AND WEAKNESS
    const pokemon = await fetch(
      `${API_URL}?method=get_types_and_weaknesses&id=${id}`
    ).then((res) => res.json());
    types.value = pokemon.types;
    weaknesses.value = pokemon.weaknesses;

    // STATS
    stats.value = (await fetch(`${API_URL}?method=get_stats&id=${id}`).then(
      (res) => res.json()
    )) as Stats[];

    // COLOR PALETTE
    colorPalette.value = await fetch(
      `${API_URL}?method=get_color_palette&id=${id}`
    ).then((res) => res.json());
  };

  watch(
    () => count.value,
    async (newCount, oldCount) => {
      if (newCount === oldCount) return;
      await setPokemon(newCount);
    },
    { immediate: true }
  );

  return {
    count,
    pokemonDetails,
    evolutionChain,
    types,
    weaknesses,
    stats,
    colorPalette,
    increment,
    decrement,
    setPokemon,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(usePokedexStore as any, import.meta.hot)
  );
}
