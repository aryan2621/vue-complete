<template>
  <h2>Reaction Time :{{ score }} m/s</h2>
  <p class="rank">{{rank}}</p>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Ninja Fingers";
    } else if (this.score < 400) {
      this.rank = "Rapid Reflex";
    } else {
      this.rank = "Slow man....";
    }
  },
};
</script>

<style>
.rank{
    font-size: 1.4rem;
    color: #0faf87;
    font-weight: bold;
}</style>
