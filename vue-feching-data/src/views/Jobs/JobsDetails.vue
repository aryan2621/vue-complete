<template>
  <div v-if="job">
    <h3>{{ job.title }}</h3>
    <h1>Job Details Page</h1>
    <p>The Details is {{ job.details }}</p>
  </div>
  <div v-else>
    <h3>Loading.....</h3>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
