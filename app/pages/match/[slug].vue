<script setup lang="ts">
import { matches } from "~/data";

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
      <MatchFormation
  side="home"
  :players="match.homeTeam.players"
  :formation="match.homeTeam.formation"
  :team-name="match.homeTeam.name"
/>

      <MatchStats
        :stats="match.stats"
      />

      
<MatchFormation
  side="away"
  :players="match.awayTeam.players"
  :formation="match.awayTeam.formation"
  :team-name="match.awayTeam.name"
/>
    </div>

    <div class="mt-6">
      <MatchEvents
        :events="match.events"
      />
    </div>
  </div>
</template>