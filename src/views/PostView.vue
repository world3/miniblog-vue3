<template>
    <div><router-link to="/new_post">Add a Post</router-link></div>
    <div class="blog_post" v-if="!!post">
        <div class="blog_title">
            <h2>{{ post.title }}</h2>
            <div class="subtitle">
                <span>By {{ post.author }}</span>
                <span> On {{ formatPublishDate(post.publishDate) }}</span>
            </div>
        </div>
        <div class="blog_content">
            <p v-for="(paragraph, index) in post.content" :key="index">{{ paragraph }}</p>
        </div>
    </div>
    <div v-if="!post">
        <h2>Post Not Found.</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex' 
import { usePost, Post } from '@/models/post'

export default defineComponent({
    setup() {
        const posts = useStore().state.posts as Post[]
        const { formatPublishDate } = usePost()

        const postId = useRoute().params.postId
        const post = posts.find(p => p.id === postId)

        return {
            post,
            formatPublishDate
        }
    }
})
</script>

<style scoped>
.blog_title {
    text-align: center;
}

.subtitle {
    font-style: italic;
    color: hsl(100,0%,50%);
}

.blog_content {
    text-align: justify;
}

ul {
    list-style-type: none;
}

li {
    float: right;
    margin-right: 15px;
}
</style>