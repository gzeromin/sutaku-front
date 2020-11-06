<template>
  <div :class="[mini? 'card-mini' : 'card']">
    <div 
      class="card-title"
      v-if="!mini"
    >
      <v-icon
        large
        left
      >
        mdi-alien-outline
      </v-icon>
      {{pb.title}}
    </div>

    <div class="card-content">
      <div 
        class="painting"
        :style="{
          'background-image': 'url('+require('@/assets/img/twoWay.jpg')+')'
        }"
      >
      </div>
      <div class="text">
        {{pb.content}}
      </div>

    </div>

    <div class="register" v-if="!mini">
      <div class="register-name">
        {{pb.register}}
      </div>
      <div 
        class="register-avatar"
        :style="{
          'background-image': 'url('+require('@/assets/img/jordy.png')+')'
        }"
      >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Problem",
  props: {
    mini: {
      type: Boolean
    }
  },
  data: () => ({
  }),
  methods: {
  },
  computed: {
    ...mapState({
      pb: state => state.problem,
    })
  },
};
</script>
<style lang="scss" scoped>
.card {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  background-color: white;
  border-radius: .4rem;
  
  .card-title {
    font-size: 3rem;
    padding: 1.6rem;
  }
  .card-content {
    padding: 1.6rem;
    overflow: hidden;
    .text {
      margin-top: .8rem;
      font-size: 1.6rem;
      white-space: pre-line;
    }
    .painting {
      float: right;
      margin-left: .8rem;
      width: 15vw;
      height: 35vh;
      background-size: cover;
      background-position: center center;
    }
  }
}
.card-mini {
  background-color: white;
  border-radius: .4rem;
  .card-content {
    padding: 1rem;
    display: flex;
    flex-direction: column-reverse;
    flex: 1 auto;
    .text {
      padding: 1rem;
      margin-top: .8rem;
      font-size: 1.3rem;
      white-space: pre-line;
      flex: 1;
      justify-content: center;
    }
    .painting {
      margin: 0 auto;
      width: 100%;
      height: 33vh;
      background-size: cover;
      background-position: center center;
    }
  }
}
.register {
  display: flex;
  flex-direction: row-reverse;
  padding: 1.6rem;
  &-avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: .6rem;
    background-size: cover;
    background-position: center center;
  }
  &-name {
    font-size: 1.2rem;
    padding: .5rem 0;
  }
}
</style>