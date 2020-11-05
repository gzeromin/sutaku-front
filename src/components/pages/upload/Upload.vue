<template>
  <div class="font-size-medium">
    <table>
      <tr>
        <th class="font-size-big">TITLE</th>
        <td>
          <input type="text" v-model="title">
        </td>
      </tr>
      <tr>
        <td colspan=2>
          <textarea v-model="content"></textarea>
        </td>
      </tr>
    </table>
    <div class="btn">
      <button 
        class="btn-cancel"
      >CANCEL</button>
      <button 
        class="btn-save"
        @click="savePbl"
      >SAVE</button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'upload',
  data: () => ({
    title: '',
    content: '',
    index: 7
  }),
  methods: {
    savePbl() {
      const obj = {
        index: this.index,
        title: this.title,
        content: this.content
      };
      this.SET_PROBLEMS(obj);
      this.index++;
      this.SET_FUNC_NAVI('list');
    },
    ...mapMutations([
      'SET_PROBLEMS', 
      'SET_FUNC_NAVI'
      ])
  },
}
</script>
<style lang="scss" scoped>
input[type=text] {
  width: 100%;
  height: 4rem;
  border: 1px solid rgba(0,0,0,.5);
  border-radius: 1rem;
  box-shadow: .1rem .1rem .1rem rgba(0,0,0,.1);;
  font-size: 2rem;
  padding: 1rem;
}
textarea {
  width: 100%;
  height: 60rem;
  border: 1px solid rgba(0,0,0,.5);
  border-radius: 1rem;
  box-shadow: .1rem .1rem .1rem rgba(0,0,0,.1);;
  padding: 2.5rem;
}
.btn {
  text-align: center;
}

</style>