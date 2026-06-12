<script setup lang="ts">
defineProps<{
  stats: {
    possession: [number, number];
    shots: [number, number];
    shotsOnTarget: [number, number];
    corners: [number, number];
  };
}>();
</script>

<template>
  <div
    class="
      bg-[#10284f]
      rounded-xl
      border
      border-slate-600
      p-4
      text-white
    "
  >
    <h3
      class="
        text-center
        font-bold
        mb-6
      "
    >
      Estatísticas
    </h3>

    <div class="space-y-4">

      <div>
        <div class="flex justify-between">
          <span>{{ stats.possession[0] }}%</span>
          <span>Posse</span>
          <span>{{ stats.possession[1] }}%</span>
        </div>
      </div>

      <div>
        <div class="flex justify-between">
          <span>{{ stats.shots[0] }}</span>
          <span>Finalizações</span>
          <span>{{ stats.shots[1] }}</span>
        </div>
      </div>

      <div>
        <div class="flex justify-between">
          <span>{{ stats.shotsOnTarget[0] }}</span>
          <span>No alvo</span>
          <span>{{ stats.shotsOnTarget[1] }}</span>
        </div>
      </div>

      <div>
        <div class="flex justify-between">
          <span>{{ stats.corners[0] }}</span>
          <span>Escanteios</span>
          <span>{{ stats.corners[1] }}</span>
        </div>
      </div>

    </div>
  </div>
</template>