<template>
  <div :key="acc.id" v-for="acc in accessories">
    <div class="containerr">
      <AccessoriesItem :acc="acc" class="items" />
      <div class="buttons-container">
        <BuyButton />
        <ReadMoreButton />
        <TryItButton />
      </div>
    </div>
  </div>
</template>

<script>
import AccessoriesItem from "./AccessoriesItem.vue";
import BuyButton from "./BuyButton.vue";
import ReadMoreButton from "./ReadMoreButton.vue";
import TryItButton from "./TryItButton.vue";
export default {
  name: "AccessoriesList",
  components: {
    BuyButton,
    ReadMoreButton,
    TryItButton,
    AccessoriesItem,
  },
  props: {
    accessories: Array,
  },
};
</script>

<style scoped>
.buttons-container {
  display: flex;
}
.containerr {
  display: grid;
}
.items {
  grid-template-columns: 70% 30%;
}
</style>
