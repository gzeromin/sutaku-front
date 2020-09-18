<template>
    <v-container>
      <br/>
      <v-list-item class="px-2">
        <v-list-item-avatar size="70px">
          <v-img src="@/assets/img/jordy.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>J Min</v-list-item-title>
          <v-list-item-subtitle>1,000dallars</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
      <br/>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.path"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
  </v-container>
</template>
<script>
  export default {
    name: 'CorePersonal',
    data () {
      return {
        drawer: false,
        items: [
          { title: 'Upload', icon: 'fas fa-pen-square', path: "" },
          { title: 'Incorrect Note', icon: 'fas fa-book-open', path: "" },
          { title: 'Questions', icon: 'far fa-question-circle', path: "" },
          { title: 'Answers & Solutions', icon: 'fas fa-archive', path: "" },
        ],
        mini: false,
      }
    },
  }
</script>