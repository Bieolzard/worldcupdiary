<script setup lang="ts">
import { matches } from "~/data";
import MatchCenterPanel from "~/components/match/MatchCenterPanel.vue";
const route = useRoute();

const match = matches.find(
  item => item.slug === route.params.slug
);
</script>

<template>
  <div
    v-if="match"
    class="
      min-h-screen
      bg-[#071d49]
      p-6
    "
  >
    <MatchHeader
      :stage="match.stage"
      :date="match.date"
      :stadium="match.stadium"
      :home-team="match.homeTeam"
      :away-team="match.awayTeam"
    />

    <div
  class="
    grid
    grid-cols-1
    xl:grid-cols-[1fr_350px_1fr]
    gap-6
  "
>
  <!-- ESQUERDA -->
  <div class="flex flex-col gap-4">
    <MatchFormation
      side="home"
      header-color="bg-blue-900"
      :players="match.homeTeam.players"
      :formation="match.homeTeam.formation"
      :team-name="match.homeTeam.name"
    />

    <MatchLineup
      :players="match.homeTeam.players"
    />
  </div>

  <!-- CENTRO -->
  <div>
  <MatchCenterPanel
    :events="match.events"
    :stats="match.stats"
  />
</div>

  <!-- DIREITA -->
  <div class="flex flex-col gap-4">
    <MatchFormation
      side="away"
      header-color="bg-red-900"
      :players="match.awayTeam.players"
      :formation="match.awayTeam.formation"
      :team-name="match.awayTeam.name"
    />

    <MatchLineup
      :players="match.awayTeam.players"
    />
  </div>
</div>

  </div>
</template>