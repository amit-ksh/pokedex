<template>
  <div
    class="bg-white/70 w-full flex flex-col p-3 flex-1 backdrop-blur-md rounded-xl h-72"
  >
    <CardHeader title="Stats" />

    <div class="flex-1 px-1">
      <div class="flex gap-3 align-middle mt-1">
        <div>
          <div
            v-for="stat in pokedex.stats"
            :key="stat.label"
            class="flex justify-between h-6 mt-2 items-center"
          >
            <div
              class="font-semibold text-sm"
              :style="{ color: textColor ?? 'transparent' }"
            >
              {{ stat.label }}
            </div>
          </div>
        </div>

        <div class="flex-1">
          <div
            v-for="stat in pokedex.stats"
            :key="stat.label"
            class="flex items-center mt-2 h-6"
          >
            <div
              class="flex-1 h-3 rounded-full relative"
              :style="{ background: barColor ?? 'transparent' }"
            >
              <div
                class="absolute transition-all inset-y-0 left-0 rounded-full"
                :style="{
                  width: Math.min(stat.value, 100) + '%',
                  background: fillStatColor ?? 'transparent',
                }"
              ></div>
            </div>
          </div>
        </div>
        <div>
          <div
            v-for="stat in pokedex.stats"
            :key="stat.label"
            class="flex justify-between h-6 mt-2 items-center"
          >
            <div
              class="font-semibold text-sm tabular-nums"
              :class="`color-[${textColor ?? 'transparent'}]`"
            >
              {{ Math.round((stat.value / 100) * 150) }}
            </div>
          </div>
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

const fillStatColor = computed(
  () => `hsl(${pokedex.colorPalette[0]}, 50%, 62%)`
);
const barColor = computed(() => `hsl(${pokedex.colorPalette[0]}, 10%, 32%)`);
const textColor = computed(() => `hsl(${pokedex.colorPalette[0]}, 20%, 32%)`);
</script>
