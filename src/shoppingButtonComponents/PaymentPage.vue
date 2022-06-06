<template>
  <div class="wrapper">
    <h2>Your products</h2>
    <div class="productList">
      <ShoppingList />
    </div>
    <h2 class="totalPrice">{{ priceText }}</h2>
    <button @click="calculateTotalPrice(products)">Calculate price</button>
    <br />
    <button @click="placeOrder">Place order</button>
  </div>
</template>

<script>
import ShoppingList from "./ShoppingList.vue";
export default {
  name: "PaymentPage",
  components: {
    ShoppingList,
  },
  data() {
    return {
      products: this.$store.state.shopListData.shopListItems,
      priceText: "Total price: 0 $",
      suma: "",
    };
  },
  methods: {
    placeOrder() {
      alert("Placing order...");
      this.$store.commit("removeItems");
      setTimeout(() => this.$router.push({ name: "home" }), 1000);
    },
    calculateTotalPrice(items) {
      if (items.length === 0) {
        alert("The shopping cart is empty.");
      } else {
        let stringPrices = [];
        for (let item of items) {
          stringPrices.push(item.price);
        }
        let stringPrices1 = stringPrices.map((price) => price.slice(0, -1));
        let numberPrices = stringPrices1.map((price) => parseInt(price));
        let total = 0;
        for (let i = 0; i < numberPrices.length; i++) {
          total += numberPrices[i];
        }
        console.log(total);
        this.priceText = "Total price:" + " " + total + "$";
        this.suma = total;
      }
    },
  },
};
</script>

<style scoped>
button {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  border-radius: 15px;
}
.totalPrice {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin-left: 25%;
  margin-right: 25%;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  border-radius: 15px;
}
.productList {
  border: 2px solid black;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
}
.wrapper {
  padding: 5px;
  margin-left: 10%;
  margin-right: 10%;
  background-color: rgba(131, 141, 237, 0.4);
  border: 1px solid rgba(131, 141, 237);
  border-radius: 15px;
}
h2 {
  padding: 5px;
  color: black;
}
</style>
