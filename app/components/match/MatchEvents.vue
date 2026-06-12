<script setup lang="ts">
import type { MatchEvent } from "~/types/match";

defineProps<{
  events: MatchEvent[];
}>();

const getEventIcon = (
  type: MatchEvent["type"]
) => {
  switch (type) {
    case "goal":
      return "⚽";

    case "yellow":
      return "🟨";

    case "red":
      return "🟥";

    case "substitution":
      return "🔁";

    case "penalty":
      return "🎯";

    case "own_goal":
      return "🥅";

    default:
      return "•";
  }
};
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
    items-center
    gap-2
    py-2
    border-b
    border-slate-700
    text-sm
  "
>
  <span class="text-yellow-400 font-semibold">
    {{ event.minute }}'
  </span>

  <span>
  {{ getEventIcon(event.type) }}
</span>

  <span>
    {{ event.player }}
  </span>
</div>
  </div>
</template>