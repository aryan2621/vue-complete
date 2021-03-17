<template>
  <h1>Ref/Reactive</h1>
  <h3>{{ name }}----{{ age }}</h3>
  <p>This is mY world</p>
  <button @click="handleClick">Submit</button>
  <button @click="age++">Age +1</button>
  <input type="text" v-model="name" />

  <p>---------------------</p>
  <p>{{ ninjaOne.name }}-{{ ninjaOne.age }}</p>
  <button @click="updateNinjaOne">Update Ninja One</button>
  <p>-----------------------------</p>
  <h2>Recative</h2>
  <p>{{ ninjaTwo.name }} ------{{ ninjaTwo.age }}</p>
  <button @click="updateNinjaTwo">Submit</button>
  <p>-----------------------------</p>
  <div v-for="name in matchingNames">
    <p>{{ name }}</p>
  </div>
  <input type="text" v-model="search" />
  <h3>{{ search }}</h3>

  <button @click="handleStopWatch">StopWatch</button>
</template>

<script>
//primitive value not updte in the reactibe
//ref is better in this
//refs >>>>>> reactive
import { ref, reactive, computed, watch, watchEffect } from "vue";
export default {
  name: "Home",
  setup() {
    const search = ref("");
    const names = ref([
      "mario",
      "lavish",
      "depeesh",
      "riyanshi",
      "rishabh",
      "verma",
    ]);
    const ninjaOne = ref({ name: "maria", age: 30 });
    const ninjaTwo = reactive({ name: "Lunji", age: 36 });
    const name = ref("Rishabh");
    const age = ref(30);
    const handleClick = () => {
      name.value = "verma";
      age.value = "35";
    };
    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };
    const handleStopWatch = () => {
      stopWatch();
      stopEffect();
    };
    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
    };
    const stopWatch = watch(search, () => {
      console.log("typeedddddddd");
    });
    const stopEffect = watchEffect(() => {
      console.log("runnning the watchFunction", search);
    });
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return {
      name,
      age,
      handleClick,
      updateNinjaOne,
      ninjaOne,
      ninjaTwo,
      handleStopWatch,
      updateNinjaTwo,
      names,
      search,
      matchingNames,
    };
  },
};
</script>

<style>
.test {
  color: crimson;
}
</style>
