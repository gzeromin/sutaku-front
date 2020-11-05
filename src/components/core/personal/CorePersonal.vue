<template>
  <div>
    <div class="user">
      <br>
      <div 
        class="user-photo"
        :style="{'background-image': 'url('+require('@/assets/img/jordy.png')+')'}"
      >
      </div>
      <div class="user-name">J.Min</div>
    </div> 
  </div>
</template>
<script>
  export default {
    name: 'CorePersonal',
  }
</script>