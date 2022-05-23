<template>
  <div>
    <b-dropdown>
      <template #button-content>
        <font-awesome-icon icon="user-tie" size="2x" />
      </template>
      <b-dropdown-item href="#">An item</b-dropdown-item>
      <b-dropdown-item href="#">Another item</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "UserButton",
};
</script>

<style scoped></style>
