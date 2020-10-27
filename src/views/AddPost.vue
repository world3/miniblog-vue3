<template>
  <div id="addPostForm">
    <form @submit.prevent="handleSubmit()">
      <label for="title">Title:</label><br />
      <input v-model="title" type="text" id="title" name="title" /><br />
      <label for="content">Content:</label><br />
      <div class="textarea_container">
        <textarea
          v-model="content"
          id="content"
          name="content"
          rows="15"
        ></textarea>
      </div>
      <br />
      <button class="button" type="submit" :disabled="disableSubmit">Submit</button>
      <button class="button" @click.prevent="handleCancel">Cancel</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
import { usePost } from "@/models/post";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const title = ref("");
    const content = ref("");
    const disableSubmit = ref(true);

    const router = useRouter();
    const store = useStore();
    const { createPost } = usePost();

    const handleSubmit = () => {
      store.dispatch(
        "addPost",
        createPost(title.value, content.value.split(/\r?\n/), "Larry Yang")
      );
      router.push("/");
    };

    const handleCancel = () => {
      router.push("/");
    };

    watch(title, (value: string) => {
      disableSubmit.value = !value || value.trim().length === 0;
    });

    return {
      title,
      content,
      handleSubmit,
      disableSubmit,
      handleCancel,
    };
  },
});
</script>

<style scoped>
#addPostForm {
  text-align: left;
}

#title {
  height: 30px;
  width: 100%;
  margin-bottom: 30px;
}

#content {
  width: 100%;
}

.textarea_container {
  border: 0px;
  margin: 0px 0;
  padding: 0px;
}

.button {
  margin-right: 15px;
  padding: 0 30px;
  height: 30px;
}

textarea:focus, input:focus {
    outline: none;
}
</style>