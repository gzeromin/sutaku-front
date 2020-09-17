<template>
  <div>
    <!-- Problem -->
    <div id="core-problem">
      <Problem />
    </div>
  </div>
</template>
<script>
export default {
  name: "CoreView",
  components: {
    Problem: () => import("@/components/core/view/Problem.vue"),
    
  }
};
</script>