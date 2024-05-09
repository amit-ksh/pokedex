<template>
  <div
    class="bg-white/70 w-full md:w-auto flex flex-col p-3 aspect-square backdrop-blur-md rounded-xl h-72"
  >
    <CardHeader title="Picture" />

    <div class="flex-1 relative">
      <img
        v-if="pokedex.pokemonDetails"
        class="absolute inset-0 w-full h-full object-contain object-center"
        :src="
          pokedex.pokemonDetails.sprites.other['official-artwork'].front_default
        "
        :alt="pokedex.pokemonDetails.name"
      />
    </div>

    <NavButtons />
  </div>
</template>

<script setup lang="ts">
import { usePokedexStore } from "../stores/pokedex";

import CardHeader from "./CardHeader.vue";
import NavButtons from "./NavButtons.vue";

const pokedex = usePokedexStore();
</script>
