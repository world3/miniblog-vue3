<template>
    <div class="blog_post">
        <div class="blog_title">
            <h2>{{ post.title }}</h2>
            <div class="subtitle">
                <span>By {{ post.author }}</span>
                <span> On {{ formatPublishDate(post.publishDate) }}</span>
            </div>
        </div>
        <div class="blog_content">
            <p>{{ postSummary(post.content) }}</p>
            <p><router-link :to="`/posts/${post.id}`">Read More</router-link></p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { usePost, Post } from '@/models/post'

export default defineComponent({
    props: {
        post: {
            type: Object as PropType<Post>, 
            required: true,
        },
    },

    setup() {
        const postSummary = (c: string[]) => {
            const empty = c.length === 0 || !c[0]
            return empty ? '...' : `${c[0].trim().substring(0, 256)} ...`
        }

        const { formatPublishDate } = usePost()

        return {
            formatPublishDate,
            postSummary,
        }
    }
})
</script>

<style scoped>
.blog_title {
    text-align: left;
}

.subtitle {
    font-style: italic;
    color: hsl(100,0%,50%);
}

.blog_content {
    text-align: justify;
}

a {
    text-decoration: none;
}

</style>