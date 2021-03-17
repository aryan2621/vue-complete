<template>
  <div class="post-list">
    <div v-for="post in post2">
      <SinglePost :post="post2" />
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
export default {
  props: ["post2"],
  components: { SinglePost },
  setup(props) {
    // console.log(props.posts);
  },
};
</script>

<style></style>
