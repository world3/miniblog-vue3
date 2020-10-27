<template>
  <div>
    <div class='content'>
      <div v-for="(post, index) in posts" :key="index" class="post">
        <BlogPost :post="post" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import BlogPost from '@/components/BlogPost.vue';
import { Post } from '@/models/post'

export default defineComponent({
  name: 'BlogList',

  components: {
    BlogPost,
  },

  props: {
    posts: Array as PropType<Post[]>,
  }, 

  setup() {
    return {}
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  text-align: left;
}

p {
  text-align: justify;
}

.post {
  margin-bottom: 30px;
}
</style>
