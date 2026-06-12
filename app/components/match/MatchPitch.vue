<script setup lang="ts">
defineProps<{
  side: "home" | "away";
}>();
</script>

<template>
  <div
    class="
      relative
      h-[260px]
      overflow-hidden
    "
    style="
      background:
        repeating-linear-gradient(
          90deg,
          #1c8c3a 0px,
          #1c8c3a 40px,
          #239845 40px,
          #239845 80px
        );
    "
  >
    <!-- Sombra do gramado -->
    <div
      class="
        absolute
        inset-0
        pointer-events-none
      "
      style="
        background:
          linear-gradient(
            to bottom,
            rgba(0,0,0,.18),
            transparent 20%,
            transparent 80%,
            rgba(0,0,0,.15)
          );
      "
    />

    <!-- Borda interna -->
    <div
      class="
        absolute
        inset-1
        border
        border-white/10
        pointer-events-none
      "
    />

    <!-- Gols -->
    <div
      class="
        absolute
        left-0
        top-1/2
        w-2
        h-12
        bg-white/70
        -translate-y-1/2
      "
    />

    <div
      class="
        absolute
        right-0
        top-1/2
        w-2
        h-12
        bg-white/70
        -translate-y-1/2
      "
    />

    <!-- Linha central -->
    <div
      class="
        absolute
        top-0
        bottom-0
        left-1/2
        w-px
        bg-white/50
      "
    />

    <!-- Marca central -->
    <div
      class="
        absolute
        left-1/2
        top-1/2
        w-2
        h-2
        rounded-full
        bg-white/50
        -translate-x-1/2
        -translate-y-1/2
      "
    />

    <!-- Círculo central -->
    <div
      class="
        absolute
        left-1/2
        top-1/2
        w-20
        h-20
        rounded-full
        border-2
        border-white/40
        -translate-x-1/2
        -translate-y-1/2
      "
    />

    <!-- Área esquerda -->
    <div
      class="
        absolute
        left-0
        top-1/2
        w-20
        h-32
        border-2
        border-l-0
        border-white/40
        -translate-y-1/2
      "
    />

    <!-- Pequena área esquerda -->
    <div
      class="
        absolute
        left-0
        top-1/2
        w-8
        h-16
        border-2
        border-l-0
        border-white/40
        -translate-y-1/2
      "
    />

    <!-- Marca penal esquerda -->
    <!-- <div
      class="
        absolute
        left-[12%]
        top-1/2
        w-1.5
        h-1.5
        rounded-full
        bg-white/50
        -translate-x-1/2
        -translate-y-1/2
      "
    /> -->

    <!-- Meia lua esquerda -->
    <!-- <div
      class="
        absolute
        left-[17%]
        top-1/2
        w-10
        h-10
        rounded-full
        border-2
        border-white/30
        -translate-x-1/2
        -translate-y-1/2
      "
      style="
        clip-path: inset(0 50% 0 0);
      "
    /> -->

    <!-- Área direita -->
    <div
      class="
        absolute
        right-0
        top-1/2
        w-20
        h-32
        border-2
        border-r-0
        border-white/40
        -translate-y-1/2
      "
    />

    <!-- Pequena área direita -->
    <div
      class="
        absolute
        right-0
        top-1/2
        w-8
        h-16
        border-2
        border-r-0
        border-white/40
        -translate-y-1/2
      "
    />

    <!-- Marca penal direita -->
    <!-- Meia lua esquerda -->
<!-- <div
  class="
    absolute
    left-[17%]
    top-1/2
    w-10
    h-10
    rounded-full
    border-2
    border-white/30
    -translate-x-1/2
    -translate-y-1/2
  "
  style="
    clip-path: inset(0 0 0 50%);
  "
/>

    
<div
  class="
    absolute
    right-[17%]
    top-1/2
    w-10
    h-10
    rounded-full
    border-2
    border-white/30
    translate-x-1/2
    -translate-y-1/2
  "
  style="
    clip-path: inset(0 50% 0 0);
  "
/> -->

    <slot />
  </div>
</template>