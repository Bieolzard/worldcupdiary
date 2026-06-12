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
    <!-- HEADER -->
    <div
      :class="[
        'flex items-center justify-between px-4 py-2 border-b border-slate-500',
        headerColor || 'bg-gradient-to-b from-[#27469a] to-[#19356d]'
      ]"
    >
      <div class="flex items-center gap-2">
        <Icon
          :icon="`circle-flags:${countryCode}`"
          class="w-5 h-5"
        />

        <h2
          class="
            text-white
            uppercase
            font-black
            tracking-wide
          "
        >
          {{ teamName }}
        </h2>
      </div>

      <span
        class="
          text-yellow-400
          font-black
          tracking-wide
        "
      >
        {{ formation }}
      </span>
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
