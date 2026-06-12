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
    return "bg-[#2d62ff] text-white";

  if (midfielders.includes(position))
    return "bg-[#00b94d] text-white";

  if (attackers.includes(position))
    return "bg-[#ff3434] text-white";

  return "bg-slate-600 text-white";
};

const getPositionColor = (
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
    return "bg-yellow-500";

  if (defenders.includes(position))
    return "bg-blue-600";

  if (midfielders.includes(position))
    return "bg-green-600";

  if (attackers.includes(position))
    return "bg-red-600";

  return "bg-slate-600";
};
</script>

<template>
  <div
    class="
      bg-[#10284f]
      border-t
      border-slate-900
    "
  >
    <!-- Header -->
    <div
      class="
        grid
        grid-cols-[50px_1fr_50px]
        items-center
        px-2
        py-1
        text-white
        font-bold
        uppercase
        text-xs
        tracking-wider
        border-b
        border-slate-600
        bg-gradient-to-b
        from-[#243f7d]
        to-[#152b57]
      "
    >
      <span class="text-left">
        L1
      </span>

      <span class="text-center">
        Titulares
      </span>

      <span class="text-right">
        R1
      </span>
    </div>

    <div
      v-for="(player, index) in players"
      :key="player.number"
      :class="[
        'grid grid-cols-[28px_50px_1fr] items-center px-2 py-[2px] border-b border-slate-700 text-sm',
        index % 2 === 0
          ? 'bg-[#10284f]'
          : 'bg-[#0d2347]'
      ]"
    >
      <!-- Número -->
      <span
        class="
          text-yellow-300
          font-black
          text-center
        "
      >
        {{ player.number }}
      </span>

      <!-- Posição -->
      <div
  class="
    relative
    w-12
    h-5
    bg-[#0a0a0a]
    border
    border-black
    flex
    items-center
    justify-center
    overflow-hidden
  "
>
  <span
    class="
      relative
      z-10
      text-white
      text-[10px]
      font-black
      uppercase
    "
  >
    {{ player.position }}
  </span>

  <div
    :class="[
      'absolute bottom-0 left-0 right-0 h-[4px]',
      getPositionColor(player.position)
    ]"
  />
</div>

      <!-- Nome -->
      <span
        class="
          text-white
          truncate
          uppercase
          font-bold
          tracking-tight
          pl-2
        "
      >
        {{ player.name }}
      </span>
    </div>
  </div>
</template>