import store from "../index";
const shopListItemModule = {
  state: {
    shopListItems: [],
  },
  mutations: {
    removeItems(state) {
      state.shopListItems.splice(0, state.shopListItems.length);
    },
    setItemRemoveRequest(state, id) {
      let shopItem = state.shopListItems.find(
        (shopItem) => shopItem.uniqueID === id
      );
      console.log(shopItem);
      shopItem.removeRequest = !shopItem.removeRequest;
    },
    addShopItem(state, item) {
      let user = store.state.userData.usersData.find(
        (user) => user.loginStatus === true
      );
      if (user === undefined) {
        alert("Please create an account and/or login first.");
      } else if (item.stock === true){
        state.shopListItems.push(item);
        let i = 0;
        state.shopListItems.forEach((element) => (element.uniqueID = i++));
        item.removeRequest = false;
        console.log(state.shopListItems);
      }
      else{
        alert("Product is out of stock.")
      }
    },
    removeShopItem(state, id) {
      let shopItem = state.shopListItems.find(
        (shopItem) =>
          shopItem.removeRequest === true && shopItem.uniqueID === id
      );
      if (shopItem === undefined) {
        alert("Something went wrong. Please try again.");
      } else {
        let shopItemIndex = state.shopListItems.indexOf(shopItem);
        console.log(shopItemIndex);
        state.shopListItems.splice(shopItemIndex, 1);
        console.log(state.shopListItems);
      }
    },
  },
};
export default shopListItemModule;
