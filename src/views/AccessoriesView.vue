<template>
  <div class="wrapper">
    <br />
    <br />
    <p class="title">
      Here is a list of our available accessories at the moment.
    </p>
    <div class="accessoriesList">
      <AccessoriesList />
    </div>
  </div>
</template>

<script>
import AccessoriesList from "../components/accessoriesComponents/AccessoriesList.vue";
export default {
  name: "AccessoriesView",
  components: {
    AccessoriesList,
  },
  props: {},
};
</script>

<style scoped>
.title {
  color: black;
  font-size: 20px;
  font-weight: 550;
  text-shadow: 4px 4px 4px rgba(131, 141, 237);
}
.wrapper {
  background-color: rgba(131, 141, 237, 0.4);
  border: 1px solid rgba(131, 141, 237);
  border-radius: 15px;
}

.accessoriesList {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
}
</style>
