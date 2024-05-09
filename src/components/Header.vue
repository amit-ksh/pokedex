<template>
  <div
    class="container flex items-center px-8 mt-8 justify-between mx-auto max-w-5xl"
  >
    <p class="text-2xl opacity-70 font-semibold flex gap-2 items-center">
      Pokémon
    </p>
    <p class="text-2xl opacity-70 font-semibold">
      #{{ createLeadingZero(pokedexStore.count) }}
    </p>
  </div>

  <div
    class="container flex items-center px-8 justify-between mx-auto max-w-5xl"
  >
    <p class="text-7xl sm:text-8xl font-semibold opacity-70 font-fun">
      {{ pokedexStore.pokemonDetails?.name }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { usePokedexStore } from "../stores/pokedex";
import { createLeadingZero } from "../utils/fns";

const pokedexStore = usePokedexStore();
</script>
