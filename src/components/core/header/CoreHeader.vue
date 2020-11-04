<template>
  <div>
    <login class="login"/>
  </div>
</template>
<script>
export default {
  name: 'CoreHeader',
  components: {
    Login: () => import("./login/Login")
  }
}
</script>