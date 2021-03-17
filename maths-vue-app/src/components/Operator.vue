<template
  ><div class="start">
    <button @click="$emit('selectedOperator', '+')">Addition</button>
    <button @click="$emit('selectedOperator', '-')">Substration</button>
    <button @click="$emit('selectedOperator', '*')">Multiplication</button>
    <button @click="$emit('selectedOperator', '/')">Division</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.start {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  padding: 2px 0 2px 0;
}
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
