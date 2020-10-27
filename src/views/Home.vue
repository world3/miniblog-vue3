<template>
  <div class="home">
    <h1 class="title">The Development Journal</h1>
    <div><router-link to="/new_post">Add a Post</router-link></div>
    <BlogList :posts="posts"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BlogList from '@/components/BlogList.vue';
import { useStore } from 'vuex';
import { Post } from '@/models/post'

export default defineComponent({
  components: {
    BlogList,
  },

  setup() {
    const posts: Post[] = useStore().getters.sortedPosts

    return {
      posts,
    }
  }
})
</script>

<style scoped>
.title {
  margin: 40px 0;
  color: gray;
}
</style>