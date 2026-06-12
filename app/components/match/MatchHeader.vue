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
      mb-6
      border-y
      border-slate-500
      bg-gradient-to-b
      from-[#081225]
      via-[#0b1b3a]
      to-[#081225]
      py-3
      text-white
    "
  >
    <!-- Barra superior -->
    <div
      class="
        flex
        justify-between
        text-xs
        uppercase
        tracking-widest
        px-4
        text-slate-300
      "
    >
      <span>Copa do Mundo 2026</span>

      <span>
        {{ date }} |
        {{ stadium }}
      </span>
    </div>

    <!-- Centro -->
    <div
      class="
        text-center
        mt-2
      "
    >
      <p
        class="
          uppercase
          tracking-wider
          text-sm
          font-bold
          text-slate-200
        "
      >
        Fase de Grupos - {{ stage }}
      </p>

      <p
        class="
          text-yellow-400
          font-black
          text-2xl
          uppercase
          mt-1
        "
      >
        Fim de Jogo
      </p>

      <div
        class="
          flex
          justify-center
          items-center
          gap-8
          mt-2
        "
      >
        <span
          class="
            text-7xl
            font-black
            leading-none
          "
        >
          {{ homeTeam.score }}
        </span>

        <span
          class="
            text-5xl
            font-black
            text-slate-300
          "
        >
          -
        </span>

        <span
          class="
            text-7xl
            font-black
            leading-none
          "
        >
          {{ awayTeam.score }}
        </span>
      </div>
    </div>
  </div>
</template>