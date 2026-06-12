<script setup lang="ts">
defineProps<{
  side: "home" | "away";
}>();
</script>

<template>
  <div
  class="
    relative
    h-[240px]
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

<div
  class="
    absolute
    inset-0
    bg-black/10
    pointer-events-none
  "
/>

<div
  class="
    absolute
    left-0
    top-1/2
    w-2
    h-12
    bg-white/60
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
    bg-white/60
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

    <slot />
  </div>
</template>