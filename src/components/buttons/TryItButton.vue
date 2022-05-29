<template>
  <div>
    <button @click="onClick()">Add to TRY IT</button>
  </div>
</template>

<script>
export default {
  name: "TryItButton",
  components: {},
  methods: {
    onClick() {
      let text = "Loading...";
      confirm(text);
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
  outline: 0;
  display: flex;
  font-weight: 400;
  margin-left: 5px;
  line-height: 1.5;
  text-align: center;
  background-color: transparent;
  padding: 6px 12px;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: white;
  border: 1px solid white;
}
button:hover {
  color: #fff;
  background-color: black;
  border-color: black;
}
</style>
