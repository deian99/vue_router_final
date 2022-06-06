<template>
  <button @click="getAccDetails">Show details</button>
  <AccountDetailsPage v-if="showComponent" :user="user" />
</template>

<script>
import AccountDetailsPage from "../components/userComponents/AccountDetailsPage.vue";

export default {
  name: "AccountDetailsView",
  components: {
    AccountDetailsPage,
  },
  data() {
    return {
      user: Function,
      showComponent: false,
    };
  },
  methods: {
    getAccDetails() {
      this.user = this.$store.state.userData.usersData.find(
        (user) => user.loginStatus === true
      );
      console.log(this.user);
      this.showComponent = !this.showComponent;
    },
  },
};
</script>

<style scoped>
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  border-radius: 15px;
}
</style>
