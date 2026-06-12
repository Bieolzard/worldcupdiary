<script setup lang="ts">
import type {
  MatchEvent,
  MatchStats
} from "~/types/match";

defineProps<{
  events: MatchEvent[];
  stats: MatchStats;
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
      overflow-hidden
      text-white
    "
  >
    <!-- EVENTOS -->
    <div class="p-4">
      <h3
        class="
          text-center
          font-bold
          uppercase
          tracking-wide
          mb-4
        "
      >
        Eventos
      </h3>

      <div
        v-for="event in events"
        :key="`${event.minute}-${event.player}`"
        class="
          flex
          items-center
          gap-2
          py-2
          text-sm
        "
      >
        <span
          class="
            text-yellow-400
            font-bold
            w-10
          "
        >
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

    <!-- DIVISOR -->
    <div
      class="
        h-px
        bg-slate-600
      "
    />

    <!-- ESTATÍSTICAS -->
    <div class="p-4">
      <h3
        class="
          text-center
          font-bold
          uppercase
          tracking-wide
          mb-4
        "
      >
        Estatísticas
      </h3>

      <div
        class="
          grid
          gap-3
          text-sm
        "
      >
        <div class="flex justify-between">
          <span>{{ stats.possession[0] }}%</span>
          <span>Posse</span>
          <span>{{ stats.possession[1] }}%</span>
        </div>

        <div class="flex justify-between">
          <span>{{ stats.shots[0] }}</span>
          <span>Finalizações</span>
          <span>{{ stats.shots[1] }}</span>
        </div>

        <div class="flex justify-between">
          <span>{{ stats.shotsOnTarget[0] }}</span>
          <span>No alvo</span>
          <span>{{ stats.shotsOnTarget[1] }}</span>
        </div>

        <div class="flex justify-between">
          <span>{{ stats.corners[0] }}</span>
          <span>Escanteios</span>
          <span>{{ stats.corners[1] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>