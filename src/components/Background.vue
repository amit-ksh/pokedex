<template>
  <div>
    <div
      style="
        position: fixed;
        z-index: -10;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        opacity: 0.5;
        transition: background-image 0.5s ease;
      "
      :style="`background-image: ${color}`"
    ></div>
    <div
      style="
        position: fixed;
        z-index: -8;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        opacity: 0.3;
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75vh"
        height="75vh"
        fill="none"
        viewBox="0 0 96 96"
        style="
          rotate: 90deg;
          position: absolute;
          right: 0%;
          top: 50%;
          transform: translate(-85%, -45%);
        "
      >
        <g :fill="iconColor">
          <path
            fillRule="evenodd"
            d="M48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48zm0-19c16.016 0 29-12.984 29-29S64.016 19 48 19 19 31.984 19 48s12.984 29 29 29z"
            clipRule="evenodd"
          ></path>
          <path
            d="M45 60.652v16.195a29.324 29.324 0 006 0V60.652C56.733 59.298 61 54.147 61 48c0-6.147-4.267-11.298-10-12.652V19.153a29.324 29.324 0 00-6 0v16.195C39.267 36.702 35 41.853 35 48c0 6.147 4.267 11.298 10 12.652z"
          ></path>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { usePokedexStore } from "../stores/pokedex";
import { constrainValue } from "../utils/fns";

const pokedex = usePokedexStore();

const color = computed(() => {
  return !pokedex.colorPalette
    ? ""
    : `linear-gradient(
		45deg,
		hsl(${constrainValue(pokedex.colorPalette[0] + 25, 0, 360)}deg ${constrainValue(
        pokedex.colorPalette[1] + 50,
        0,
        100
      )}% ${constrainValue(pokedex.colorPalette[2] - 10, 0, 100)}%) 0%,
		hsl(${constrainValue(pokedex.colorPalette[0] - 25, 0, 360)}deg ${constrainValue(
        pokedex.colorPalette[1] + 25,
        0,
        100
      )}% ${constrainValue(pokedex.colorPalette[2] + 10, 0, 100)}%) 100%
	)`;
});

const iconColor = computed(() => {
  return !pokedex.colorPalette
    ? ""
    : `hsl(${pokedex.colorPalette[0]}deg ${constrainValue(
        pokedex.colorPalette[1] + 25,
        0,
        100
      )}% ${constrainValue(pokedex.colorPalette[2] - 10, 0, 100)}%)`;
});
</script>
