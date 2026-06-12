<script setup lang="ts">
import { computed } from "vue";

import { formations } from "~/data/formation";
import type { Player } from "~/types/match";
import MatchPitch from "./MatchPitch.vue";
import { Icon } from "@iconify/vue";
const props = defineProps<{
  players: Player[];
  formation: string;
  teamName: string;
  side: "home" | "away";
  headerColor?: string;
  countryCode: string;
}>();

const getXPosition = (x: number) => {
  return props.side === "away"
    ? 100 - x
    : x;
};

const formationData =
  formations[
    props.formation as keyof typeof formations
  ];

const formationPositions =
  formationData.positions;

const positionedPlayers = computed(() => {
  return props.players.map((player, index) => ({
    ...player,
    x: getXPosition(
      formationPositions[index]?.x ?? 0
    ),
    y: formationPositions[index]?.y ?? 0
  }));
});
</script>

<template>
  <div
    class="
      bg-[#091b3b]
      border
      border-slate-500
      overflow-hidden
      shadow-xl
    "
  >
   <!-- HEADER PAÍS -->
<div
  :class="[
    'flex items-center gap-3 px-4 py-2 border-b border-slate-400',
    headerColor || 'bg-gradient-to-b from-[#3558b3] to-[#1d3876]'
  ]"
>
  <Icon
    :icon="`circle-flags:${countryCode}`"
    class="w-7 h-7 shrink-0"
  />

  <h2
    class="
      flex-1
    text-center
    text-white
    uppercase
    font-black
    tracking-wide
    text-[30px]
    drop-shadow-[0_2px_2px_rgba(0,0,0,.7)]
    "
  >
    {{ teamName }}
  </h2>
</div>

<!-- BARRA FORMAÇÃO -->
<!-- BARRA FORMAÇÃO -->
<div
  class="
    flex
    items-center
    justify-between

    px-2
    h-8

    bg-gradient-to-b
    from-[#08101f]
    to-[#000000]

    border-b
    border-slate-500
    text-white
  "
>
  <!-- Esquerda -->
  <div class="flex items-center gap-1">
    <Icon
      icon="mdi:menu-left"
      class="text-white w-8 h-8"
    />

    <div
      class="
        px-2
        h-5

        flex
        items-center

        bg-[#111]
        border
        border-slate-500

        text-[11px]
        font-black
      "
    >
      L2
    </div>
  </div>

  <!-- Formação -->
  <span
    class="
      text-lg
      font-black
      tracking-wider
      text-white
    "
  >
    {{ formation }}
  </span>

  <!-- Direita -->
  <div class="flex items-center gap-1">
    <div
      class="
        px-2
        h-5

        flex
        items-center

        bg-[#111]
        border
        border-slate-500

        text-[11px]
        font-black
      "
    >
      R2
    </div>

    <Icon
      icon="mdi:menu-right"
      class="text-white w-8 h-8"
    />
  </div>
</div>

    <!-- CAMPO -->
    <MatchPitch :side="side">

      <!-- Linha central -->
      <div
        class="
          absolute
          top-0
          bottom-0
          left-1/2
          border-l-2
          border-white/40
        "
      />

      <!-- Circulo central -->
      <div
        class="
          absolute
          top-1/2
          left-1/2
          w-20
          h-20
          rounded-full
          border-2
          border-white/40
          -translate-x-1/2
          -translate-y-1/2
        "
      />

      <!-- Jogadores -->
      <div
        v-for="player in positionedPlayers"
        :key="player.number"
        class="
          absolute
          flex
          flex-col
          items-center
          -translate-x-1/2
          -translate-y-1/2
        "
        :style="{
          left: `${player.x}%`,
          top: `${player.y}%`
        }"
      >
        <!-- Bola do jogador -->
        <div
          class="
            w-9
            h-9
            rounded-full

            bg-gradient-to-b
            from-red-400
            to-red-700

            border-2
            border-white

            text-white
            font-black

            flex
            items-center
            justify-center

            shadow-lg
          "
        >
          {{ player.number }}
        </div>

        <!-- Nome -->
        <div
          class="
            mt-1

            bg-black/55

            px-1.5
            py-[1px]

            text-[10px]
            uppercase
            font-black
            tracking-tight

            text-white

            whitespace-nowrap
          "
        >
          {{ player.name }}
        </div>
      </div>

    </MatchPitch>
  </div>
</template>
