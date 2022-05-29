<template>
  <div class="dropdown">
    <font-awesome-icon icon="basket-shopping" size="2x" />
    <div class="dropdown-content">
      <h3>Shopping list</h3>
      <p>Item 1</p>
      <p>Item 2</p>
      <p>Item 3</p>
      <p>Item x</p>
      <h4>Delete items</h4>
      <h4>Proceed to payment</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasketButton",
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  color: black;
  display: none;
  position: absolute;
  background-color: rgba(127, 127, 127, 0.35);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  right: 0;
  border-radius: 15px;
  border: 1px solid rgba(127, 127, 127);
}
p:hover {
  color: white;
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
