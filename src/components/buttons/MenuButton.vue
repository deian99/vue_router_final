<template>
  <div class="dropdown">
    <font-awesome-icon icon="ellipsis-vertical" size="2x" />
    <div class="dropdown-content">
      <h4>Why choose us</h4>
      <h4>Contact</h4>
      <h4>About</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuButton",
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
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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
