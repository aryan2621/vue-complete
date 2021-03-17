<template>
  <div class="projects">
    <div class="calculator">
      <Calculator />
    </div>
    <ToDo />
    <div>
      <Timer />
    </div>
    <div>
      <Spotify/>
    </div>
  </div>
</template>

<script>
import Calculator from "./components/Calculator";
import Spotify from './components/Spotify.vue';
import Timer from "./components/Timer.vue";
import ToDo from "./components/ToDo.vue";
export default {
  name: "App",
  components: { Calculator, ToDo, Timer, Spotify },
};
</script>

<style>
.projects {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

</style>
