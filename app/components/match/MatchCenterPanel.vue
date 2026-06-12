<script setup lang="ts">
import type { MatchEvent, MatchStats } from "~/types/match";
import { Icon } from "@iconify/vue";
const props = defineProps<{
  homeScore: number;
  awayScore: number;
  events: MatchEvent[];
  stats: MatchStats;
}>();

const getEventIcon = (type: MatchEvent["type"]) => {
  switch (type) {
    case "goal":
      return "game-icons:soccer-ball";

    case "yellow":
      return "mdi:card";

    case "red":
      return "mdi:card";

    case "substitution":
      return "mdi:swap-horizontal";

    case "penalty":
      return "mdi:bullseye-arrow";

    case "own_goal":
      return "mdi:soccer";

    default:
      return "mdi:circle-small";
  }
};

const getEventColor = (type: MatchEvent["type"]) => {
  switch (type) {
    case "yellow":
      return "text-yellow-400";

    case "red":
      return "text-red-500";

    case "goal":
      return "text-white";

    case "substitution":
      return "text-cyan-400";

    default:
      return "text-white";
  }
};
</script>

<template>
  <div
    class="
      bg-gradient-to-b
      from-[#0e2248]
      to-[#08162f]
      border
      border-slate-500
      overflow-hidden
      text-white
      shadow-2xl
    "
  >
    <!-- RESULTADO -->
    <div
      class="
        text-center
        border-b
        border-slate-600
        py-4
      "
    >
      <div
        class="
          text-yellow-400
          uppercase
          tracking-[0.35em]
          text-xs
          font-black
        "
      >
        Fim de Jogo
      </div>

      <div
        class="
          text-[5rem]
          font-black
          leading-none
          mt-2
          text-white
        "
      >
        {{ homeScore }}
        -
        {{ awayScore }}
      </div>
    </div>

    <!-- EVENTOS -->
    <div class="p-4">
      <div
        v-for="event in events"
        :key="`${event.minute}-${event.player}`"
        class="
          flex
          items-center
          gap-3
          py-1.5
          text-sm
          font-bold
          uppercase
        "
      >
        <span
          class="
            text-yellow-400
            w-10
            text-right
          "
        >
          {{ event.minute }}'
        </span>

        <Icon
          :icon="getEventIcon(event.type)"
          :class="[
            'w-4 h-4',
            getEventColor(event.type)
          ]"
        />

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
      <div
        class="
          text-center
          text-slate-300
          uppercase
          tracking-[0.35em]
          text-xs
          font-black
          mb-4
        "
      >
        Estatísticas
      </div>

      <!-- Posse -->
      <div
        class="
          grid
          grid-cols-[60px_1fr_60px]
          items-center
          text-sm
          mb-2
        "
      >
        <span class="text-yellow-400 font-black">
          {{ stats.possession[0] }}%
        </span>

        <div
          class="
            text-center
            uppercase
            bg-black/25
            py-1
            border-y
            border-slate-700
          "
        >
          Posse de Bola
        </div>

        <span
          class="
            text-yellow-400
            font-black
            text-right
          "
        >
          {{ stats.possession[1] }}%
        </span>
      </div>

      <!-- Finalizações -->
      <div
        class="
          grid
          grid-cols-[60px_1fr_60px]
          items-center
          text-sm
          mb-2
        "
      >
        <span>{{ stats.shots[0] }}</span>

        <div
          class="
            text-center
            uppercase
            bg-black/25
            py-1
            border-y
            border-slate-700
          "
        >
          Finalizações
        </div>

        <span class="text-right">
          {{ stats.shots[1] }}
        </span>
      </div>

      <!-- No alvo -->
      <div
        class="
          grid
          grid-cols-[60px_1fr_60px]
          items-center
          text-sm
          mb-2
        "
      >
        <span>
          {{ stats.shotsOnTarget[0] }}
        </span>

        <div
          class="
            text-center
            uppercase
            bg-black/25
            py-1
            border-y
            border-slate-700
          "
        >
          No Alvo
        </div>

        <span class="text-right">
          {{ stats.shotsOnTarget[1] }}
        </span>
      </div>

      <!-- Escanteios -->
      <div
        class="
          grid
          grid-cols-[60px_1fr_60px]
          items-center
          text-sm
        "
      >
        <span>
          {{ stats.corners[0] }}
        </span>

        <div
          class="
            text-center
            uppercase
            bg-black/25
            py-1
            border-y
            border-slate-700
          "
        >
          Escanteios
        </div>

        <span class="text-right">
          {{ stats.corners[1] }}
        </span>
      </div>
    </div>
  </div>
</template>
