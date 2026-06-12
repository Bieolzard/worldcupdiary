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
      relative
      mb-5
      border-y
      border-slate-500
      bg-gradient-to-b
      from-[#020814]
      via-[#081d49]
      to-[#020814]
      py-4
      text-white
      shadow-inner
    "
  >
    <!-- Barra superior -->
    <div
      class="
        flex
        justify-between
        items-center
        px-4
        text-[11px]
        uppercase
        tracking-[0.2em]
        text-slate-300
      "
    >
      <span
        class="
          font-black
          text-white
        "
      >
        Copa do Mundo 2026
      </span>

      <span>
        {{ date }} |
        {{ stadium }}
      </span>
    </div>

    <!-- Centro -->
    <div
      class="
        text-center
        mt-3
      "
    >
      <p
        class="
          uppercase
          tracking-[0.18em]
          text-lg
          font-black
          text-white
        "
      >
        Fase de Grupos - {{ stage }}
      </p>
    </div>
  </div>
</template>