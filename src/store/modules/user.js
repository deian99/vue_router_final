const userModule = {
  state: {
    usersData: [],
    firstName: "",
    lastName: "",
    username: "",
    email: "sgdfdsdfg",
    password: "",
    data: "",
  },
  mutations: {
    addUser(state, user) {
      state.usersData.push(user);
    },
  },
  actions: {},
  getters: {},
  modules: {},
};
export default userModule;
