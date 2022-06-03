import { createStore } from "vuex";
import userModule from "./modules/user";
import equipmentModule from "./modules/equipment";
import bikesModule from "./modules/bikes";
import accesModule from "./modules/accessories";
import shopListItemModule from "./modules/shopListItem";

let store = createStore({
  state: {},
  actions: {},
  getters: {},
  modules: {
    userData: userModule,
    equipData: equipmentModule,
    bikesData: bikesModule,
    accData: accesModule,
    shopListData: shopListItemModule,
  },
});
export default store;
