<template>
  <div class="post">
    <h4>{{ post.title }}</h4>
    <p>{{ snippet }}</p>
    <span v-for="tag in post2.tag"> {{ tag }} </span>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated } from "vue";
export default {
  props: ["post"],
  setup(props) {
    // onMounted(() => console.log(",mounted"));
    // onUnmounted(() => console.log("unmounted"));
    // onUpdated(() => console.log("update dmounted"));

    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "......";
    });

    return { snippet };
  },
};
</script>

<style></style>
