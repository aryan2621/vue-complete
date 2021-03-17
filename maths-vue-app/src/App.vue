<template>
  <h2>Maths Quiz App</h2>
  <OperatorQuiz v-if="operator" :operator="operator" @clearOperator="clearOperator"/>
  <Operators v-if="!operator" @selectedOperator="selectedOperator" />
</template>

<script>
import Operators from "./components/Operator";
import OperatorQuiz from "./components/OperatorQuiz.vue";
export default {
  name: "App",
  components: { Operators, OperatorQuiz },
  data() {
    return {
      operator: null,
    };
  },
  methods: {
    selectedOperator(sign) {
      this.operator = sign;
    },
    clearOperator(){
      this.operator =null
    }
    
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
  box-sizing: border-box;
}
</style>
