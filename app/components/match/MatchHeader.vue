<script setup lang="ts">
defineProps<{
  stage: string;
  date: string;
  stadium: string;

  homeTeam: {
    name: string;
    score: number;
  };

  awayTeam: {
    name: string;
    score: number;
  };
}>();
</script>

<template>
  <div
    class="
      text-center
      text-white
      mb-8
    "
  >
    <p
      class="
        uppercase
        tracking-widest
        text-slate-400
        text-sm
      "
    >
      {{ stage }}
    </p>

    <h1
      class="
        text-6xl
        font-bold
        my-2
      "
    >
      {{ homeTeam.score }}
      -
      {{ awayTeam.score }}
    </h1>

    <p
      class="
        text-2xl
        font-semibold
      "
    >
      {{ homeTeam.name }}
      vs
      {{ awayTeam.name }}
    </p>

    <p
      class="
        mt-2
        text-slate-400
      "
    >
      {{ stadium }}
    </p>

    <p
      class="
        text-slate-500
        text-sm
      "
    >
      {{ date }}
    </p>
  </div>
</template>