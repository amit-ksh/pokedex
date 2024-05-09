<template>
  <div
    class="bg-white/70 w-full flex flex-col p-3 flex-1 backdrop-blur-md rounded-xl h-72"
  >
    <CardHeader title="Evolution Chain" />

    <div class="flex-1 relative flex items-center">
      <div
        v-for="chainItem in pokedex.evolutionChain"
        class="relative flex-1 flex gap-2 flex-col justify-center items-center"
        :key="chainItem.id"
      >
        <p :style="`color: ${color}`">{{ properCase(chainItem.name) }}</p>
        <img
          :src="
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
            chainItem.id +
            '.png'
          "
          class="w-32 h-32"
        />
      </div>
    </div>

    <NavButtons />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { usePokedexStore } from "../stores/pokedex";
import { properCase } from "../utils/fns";

import CardHeader from "./CardHeader.vue";
import NavButtons from "./NavButtons.vue";

const pokedex = usePokedexStore();
const color = computed(() => `hsl(${pokedex.colorPalette[0]}, 50%, 25%)`);
</script>
