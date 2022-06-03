const shopListItemModule = {
  state: {
    shopListItems: []

  },
  mutations: {
    addShopItem(state, item) {
      state.shopListItems.push(item)
    },
  },
};
export default shopListItemModule;
