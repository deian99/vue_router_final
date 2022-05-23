<template>
  <div :key="bike.id" v-for="bike in bikes">
    <div class="containerr">
      <Bike :bike="bike" class="items" />
      <div class="buttons-container">
        <BuyButton />
        <ReadMoreButton />
        <TryItButton />
      </div>
    </div>
  </div>
</template>

<script>
import Bike from "./Bike.vue";
import BuyButton from "./BuyButton.vue";
import ReadMoreButton from "./ReadMoreButton.vue";
import TryItButton from "./TryItButton.vue";

export default {
  name: "BikesView",
  props: {
    bikes: Array,
  },
  components: {
    Bike,
    BuyButton,
    ReadMoreButton,
    TryItButton,
  },
  methods: {},
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
