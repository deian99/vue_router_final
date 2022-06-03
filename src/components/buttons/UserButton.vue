<template>
  <div class="dropdown">
    <font-awesome-icon icon="user-tie" size="2x" />
    <div class="dropdown-content">
      <p v-show="statusLogin">
        Username: <br />
        {{ username }}
      </p>

      <div v-if="statusLogin">
        <router-link to="/changepsw" class="link">
          <p>Change password</p>
        </router-link>
        <router-link to="/recoverpsw" class="link">
          <p>Recover password</p>
        </router-link>
        <router-link to="/accdetails" class="link">
          <p>Account details</p>
        </router-link>
        <p @click="logOut" class="logOut">Log out</p>
      </div>
      <div v-else>
        <router-link to="/login" class="link">
          <p class="login">Log in</p>
        </router-link>
        <router-link to="/register" class="link">
          <p class="register">Register</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserButton",
  computed: {
    username() {
      return this.$store.state.userData.username;
    },
    statusLogin() {
      return this.$store.state.userData.usersData.find(
        (user) => user.loginStatus === true
      );
    },
  },
  methods: {
    logOut() {
      let user = this.$store.state.userData.usersData.find(
        (user) => user.loginStatus === true
      );
      user.loginStatus = false;
      setTimeout(() => this.$router.push({ name: "home" }), 500);
    },
  },
};
</script>

<style scoped>
.logOut {
  cursor: pointer;
}
p {
  font-weight: 550;
}
.link {
  color: black;
  text-decoration: none;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  color: black;
  display: none;
  position: absolute;
  background-color: rgba(127, 127, 127, 0.35);
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  right: 0;
  border-radius: 15px;
  border: 1px solid rgba(127, 127, 127);
}
p:hover {
  color: white;
  text-decoration-line: underline;
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
