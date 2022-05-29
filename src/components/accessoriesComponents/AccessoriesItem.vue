<template>
  <div class="wrapper">
    <div class="containerr">
      <div class="item">
        <h3>{{ acc.maker }}</h3>
        <p class="bikeDesc">
          {{ acc.model }} <br />{{ acc.size }}<br />
          {{ acc.color }}
        </p>
        <img
          v-bind:src="acc.image"
          width="290"
          height="200"
          alt="image"
          class="productImage"
        />
        <p v-if="acc.stock" class="inStock">In stock</p>
        <p v-else class="noStock">Out of stock</p>
        <p>{{ acc.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccessoriesItem",
  props: {
    acc: Object,
    accessories: Array,
  },
};
</script>

<style scoped>
.containerr {
//background: #f4f4f4;
  width: 300px;
//cursor: pointer;
  padding: 2px;
  display: grid;
}
.item {
  background: #d3d3d3;
  color: black;
//margin: 15px;
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

h3 {
  text-align: center;
}

img {
//padding-left: 45px;
//align-self: center;
}
.inStock {
  color: green;
}
.noStock {
  color: red;
}
.productImage {
  border: 2px solid darkslategray;
}
</style>
