<template>
  <div class="wrapper">
    <div class="shopItem1">
      <div>{{ shopItem.maker }}</div>
      <div>{{ shopItem.model }}</div>
      <div>{{ shopItem.size }}</div>
      <div>{{ shopItem.type }}</div>
      <img v-bind:src="shopItem.image" alt="image" /><br />
      <div>{{ shopItem.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingItem",
  props: {
    shopItem: Object,
  },
};
</script>

<style scoped>
.wrapper {
  border: 1px solid black;
}
.shopItem1 {
  color: black;
  background-color: rgba(127, 127, 127, 0.7);
  font-weight: 550;
  justify-items: center;
  grid-template-columns: 70% 30%;
}
img {
  justify-self: center;
  align-self: center;
  border: 1px solid black;
  width: 120px;
  height: 100px;
}
</style>
