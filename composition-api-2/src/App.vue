<template>
  <h2>Home</h2>
  <!-- <PostList :posts="posts" v-if="showPost" /> -->

  <div v-if="!error">
    <!-- {{ error }} -->
    <PostList :posts="post2" />
  </div>
  <div v-else>
    <h3>Loading.....</h3>
  </div>

  <!-- <button @click="showPost = !showPost">showPost</button>
  <button @click="posts.pop()">DeletePost</button> -->
</template>

<script>
import { ref } from "vue";
import PostList from "./components/PostList.vue";
import getPosts from "./coposables/getPosts";

export default {
  components: { PostList },
  setup() {
    const showPost = ref(true);

    const posts = ref([
      {
        title: "welcome to our video",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt autem eveniet accusantium esse officiias voluptas nam, voluptatem eum dolorem repudiande a at et aliquam saepe corporis eaque sit ducimus consequuntur. ",
        id: 1,
      },
      {
        title: "welcome to subscribe to our channel",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt autem eveniet accusantium esse officiias voluptas nam, voluptatem eum dolorem repudiande a at et aliquam saepe corporis eaque sit ducimus consequuntur.",
        id: 2,
      },
    ]);

    const { post2, error, load } = getPosts();
    load()

    return { post2, showPost, error };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
