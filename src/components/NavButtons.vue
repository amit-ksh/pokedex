<template>
  <div class="flex items-center justify-between font-medium">
    <button
      @click="pokedex.decrement()"
      class="text-black/80 hover:bg-black/5 w-8 h-8 flex justify-center items-center rounded-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 18l-6-6 6-6"
        ></path>
      </svg>
    </button>
    <div class="flex-1 text-center text-sm text-black/80 font-medium">
      #{{ createLeadingZero(pokedex.count) }}
    </div>
    <button
      @click="pokedex.increment()"
      class="text-black/80 hover:bg-black/5 w-8 h-8 flex justify-center items-center rounded-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 18l6-6-6-6"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { usePokedexStore } from "../stores/pokedex";
import { createLeadingZero } from "../utils/fns";

const pokedex = usePokedexStore();
</script>
