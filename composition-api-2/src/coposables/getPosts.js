const { ref } = require("@vue/reactivity");

const getPosts = () => {
  const post2 = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw Error("No Data Available");
      }
      post2.value = await data.json();
      console.log("load", data);
    } catch (err) {
      console.log(err);
      error.value = err.message;
      console.log(err.message);
    }
  };
  return {
    post2,
    error,
    load,
  };
};
export default getPosts