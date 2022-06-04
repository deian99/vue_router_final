<template>
  <div>
    <div class="shopItem1">
      {{ shopItem.maker }}<br />{{ shopItem.model }} <br />
      <img v-bind:src="shopItem.image" alt="image" /><br />
      {{ shopItem.price }}
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
  width: 75px;
  height: 75px;
}
</style>
