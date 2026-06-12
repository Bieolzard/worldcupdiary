<script setup lang="ts">
import type { Player } from "~/types/match";

defineProps<{
  players: Player[];
}>();

const getPositionClass = (
  position: string
) => {
  const goalkeepers = ["GK"];

  const defenders = [
    "CB",
    "LCB",
    "RCB",
    "LB",
    "RB"
  ];

  const midfielders = [
    "DMF",
    "CMF",
    "AMF",
    "LMF",
    "RMF"
  ];

  const attackers = [
    "CF",
    "SS",
    "LWF",
    "RWF"
  ];

  if (goalkeepers.includes(position))
    return "bg-yellow-500 text-black";

  if (defenders.includes(position))
    return "bg-blue-600 text-white";

  if (midfielders.includes(position))
    return "bg-green-600 text-white";

  if (attackers.includes(position))
    return "bg-red-600 text-white";

  return "bg-slate-600 text-white";
};
</script>

<template>
  <div class="bg-[#10284f] border-t border-slate-900">
    <div
      class="px-3 py-1 text-center text-white font-bold uppercase tracking-wider text-xs border-b border-slate-600 bg-black/30"
    >
      TITULARES
    </div>

    <div
      v-for="player in players"
      :key="player.number"
      class="grid grid-cols-[28px_50px_1fr] items-center px-2 py-0.5 border-b border-slate-700 text-sm"
    >
      <span class="text-yellow-400 font-bold text-center">
        {{ player.number }}
      </span>

      <span
  :class="[
    'px-1 text-center text-[10px] font-bold rounded-sm w-10',
    getPositionClass(player.position)
  ]"
>
  {{ player.position }}
</span>

      <span class="text-white truncate">
        {{ player.name.toUpperCase() }}
      </span>
    </div>
  </div>
</template>
