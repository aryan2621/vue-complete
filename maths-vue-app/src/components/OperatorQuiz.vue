<template>
  <div v-if="isQuizStarted">
    <h2>{{ operandLeft }} {{ operator }} {{ operandRight }}</h2>
    <button
      @click="correct(answer)"
      v-for="(answer, index) of answers"
      :key="index"
    >
      {{ answer }}
    </button>
  </div>
  <div v-else>
    <button @click="startQuiz">Start</button>
  </div>
  <button @click="$emit('clearOperator')">Back</button>
</template>

<script>
export default {
  props: ["operator"],
  data() {
    return {
      isQuizStarted: false,
      operandLeft: null,
      operandRight: null,
      answers: [],
      expectedAnswer: null,
    };
  },
  methods: {
    startQuiz() {
      this.isQuizStarted = true;
      this.operandLeft = parseInt(Math.random() * 13);
      this.operandRight = parseInt(Math.random() * 13);

      const methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
      };
      const methodToUse = methods[this.operator];
      this.answers = [];
      for (let i = 0; i < 5; i++) {
        const answer = methodToUse(
          parseInt(Math.random() * 3),
          parseInt(Math.random() * 3)
        );
        this.answers.push(answer);
      }
      const expectedAnswer = methodToUse(this.operandLeft, this.operandRight);
      this.answers[
        parseInt(Math.random() * this.answers.length)
      ] = expectedAnswer;
      this.expectedAnswer = expectedAnswer;
    },
    correct(answerSelected) {
      if (answerSelected != this.expectedAnswer) {
        alert("wrong Answer");
      }
      this.startQuiz()
    },
  },
};
</script>

<style>
button {
  padding: 10px;
  margin: 6px;
  font-size: 15px;
  color: #fff;
  background: rgb(106, 214, 106);
  border-radius: 8px;
  cursor: pointer;
}
button:hover {
  transform: scale(1.2);
  transition: 0.2s all ease;
  cursor: pointer;
  margin: 3px 8px 3px 8px;
}
</style>
