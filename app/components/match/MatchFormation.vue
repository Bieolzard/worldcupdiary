<script setup lang="ts">
import { computed } from "vue";

import { formations } from "~/data/formation";
import type { Player } from "~/types/match";
import MatchPitch from "./MatchPitch.vue";

const props = defineProps<{
  players: Player[];
  formation: string;
  teamName: string;
  side: "home" | "away";
  headerColor?: string;
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
  <div class="bg-[#0b1b3a] rounded-xl border border-slate-600 overflow-hidden">
    <!-- Header -->
    <div
      :class="[
    'flex items-center justify-between px-4 py-3 border-b border-slate-600',
    headerColor || 'bg-[#10284f]'
  ]"
    >
      <h2 class="font-bold text-white">
        {{ teamName }}
      </h2>

      <span class="text-sm text-yellow-400 font-semibold">
        {{ formation }}
      </span>
    </div>

    <!-- Campo -->
    <MatchPitch :side="side">
      <!-- Linha central vertical -->
      <div
        class="absolute top-0 bottom-0 left-1/2 border-l-2 border-white/50"
      />

      <!-- Círculo central -->
      <div
        class="absolute top-1/2 left-1/2 w-24 h-24 rounded-full border-2 border-white/50 -translate-x-1/2 -translate-y-1/2"
      />

      <!-- Jogadores -->
      <div
        v-for="player in positionedPlayers"
        class="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
        :style="{
          left: `${player.x}%`,
          top: `${player.y}%`,
        }"
      >
        <div
          class="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold"
        >
          {{ player.number }}
        </div>

        <span class="text-white text-xs mt-1 whitespace-nowrap">
          {{ player.name }}
        </span>
      </div>
    </MatchPitch>
  </div>
</template>
