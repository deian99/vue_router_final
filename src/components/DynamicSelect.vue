<template>
  <div>
    <label for="jackets"></label>
    <select name="jackets" id="jackets">
      <option :key="item.id" v-for="item in items">{{ item.model }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "DynamicSelect",
  props: {
    item: Object,
    items: Array,
  },
};
</script>

<style scoped></style>
