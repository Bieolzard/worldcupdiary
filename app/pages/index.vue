<script setup lang="ts">
import { matches } from "~/data";
</script>

<template>
  <main
    class="
      min-h-screen
      bg-black
      text-white
      p-8
    "
  >
    <h1
      class="
        text-5xl
        font-bold
        text-yellow-400
        mb-10
      "
    >
      World Cup Diary
    </h1>

    <div class="space-y-4">
      <NuxtLink
        v-for="match in matches"
        :key="match.slug"
        :to="`/match/${match.slug}`"
        class="
          block
          p-5
          rounded-xl
          border
          border-zinc-700
          hover:border-yellow-400
          hover:bg-zinc-900
          transition
        "
      >
        <div class="flex items-center justify-between">
          <span>{{ match.homeTeam.name }}</span>

          <span class="font-bold">
            {{ match.homeTeam.score }}
            x
            {{ match.awayTeam.score }}
          </span>

          <span>{{ match.awayTeam.name }}</span>
        </div>
      </NuxtLink>
    </div>
  </main>
</template>