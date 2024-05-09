<template>
  <div
    class="bg-white/70 w-full gap-2 flex flex-col p-3 flex-1 backdrop-blur-md rounded-xl h-72"
  >
    <CardHeader title="Details" />

    <div class="flex-1 relative space-y-2">
      <div v-if="pokedex.types">
        <p class="text-sm font-semibold text-black/80">Type</p>
        <div class="flex flex-wrap mt-2 gap-2">
          <span
            v-for="type in pokedex.types"
            class="px-4 py-1 border rounded-md font-medium"
            :key="type"
            :style="{ color: color, borderColor: color }"
          >
            {{ type }}
          </span>
        </div>
      </div>

      <div v-if="pokedex.weaknesses">
        <p class="text-sm font-semibold text-black/80">Weaknesses</p>
        <div class="flex flex-wrap mt-2 gap-2">
          <span
            v-for="weakness in pokedex.weaknesses"
            class="px-4 py-1 border rounded-md font-medium"
            :style="{ color: color, borderColor: color }"
            :key="weakness"
          >
            {{ weakness }}
          </span>
        </div>
      </div>
    </div>

    <NavButtons />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { usePokedexStore } from "../stores/pokedex";

import CardHeader from "./CardHeader.vue";
import NavButtons from "./NavButtons.vue";

const pokedex = usePokedexStore();

const color = computed(() => `hsl(${pokedex.colorPalette}, 40%, 30%)`);
</script>
