<template>
  <div class="wrapper">
    <div class="containerr">
      <div class="item">
        <h3>{{ item.maker }}</h3>
        <p>{{ item.model }} {{ item.size }} {{ item.color }}</p>
        <img v-bind:src="item.image"
             width="290"
             height="200"
             alt="image"
             class="productImage" />
        <p v-if="item.stock" class="inStock">In stock</p>
        <p v-else class="noStock">Out of stock</p>
        <p>{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Item",
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.containerr {
  width: 300px;
  padding: 2px;
  display: grid;
}
.item {
  background: #d3d3d3;
  color: black;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 2px;
  text-align: left;
  border: 3px solid #2c3e50;
  grid-template-columns: 40% 30% 30%;
}
p {
  text-align: center;
}
.productImage {
  border: 2px solid darkslategray;
}
h3 {
  text-align: center;
}

img {
  align-self: center;
}
.inStock {
  color: green;
}
.noStock {
  color: red;
}
</style>
