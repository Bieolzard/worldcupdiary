<script setup lang="ts">
import type { MatchEvent } from "~/types/match";

defineProps<{
  events: MatchEvent[];
}>();
</script>

<template>
  <div
    class="
      bg-[#10284f]
      rounded-xl
      border
      border-slate-600
      p-4
      text-white
    "
  >
    <h3
      class="
        text-center
        font-bold
        mb-4
      "
    >
      Eventos da Partida
    </h3>

    <div
      v-for="event in events"
      :key="`${event.minute}-${event.player}`"
      class="
        flex
        justify-between
        py-2
        border-b
        border-slate-700
      "
    >
      <span>
        {{ event.minute }}'
      </span>

      <span>
        ⚽ {{ event.player }}
      </span>
    </div>
  </div>
</template>