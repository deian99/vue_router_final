<template>
  <div class="wrapper">
    <form method="post">
      <div class="container">
        <label for="username"><b>Username</b></label
        ><br />
        <input
          type="text"
          id="username"
          v-model="this.$store.state.username"
          placeholder="Enter Username"
          required
        /><br />
        <label for="password"><b>Password</b></label
        ><br />
        <input
          type="password"
          placeholder="Enter Password"
          v-model="password"
          id="password"
          required
        /><br />
        <h2 id="loginStatus">{{ message }}</h2>
        <button @click.prevent="login" type="submit">Login</button>

        <div class="container">
          <button type="button" class="cancelbtn">Cancel</button>
        </div>
        <label class="remember">
          <input type="checkbox" checked="checked" name="remember" />Remember me
        </label>
        <p>
          Don't have an account?
          <router-link to="/register" class="link">Register here</router-link>.
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return { message: "", username: "", password: "" };
  },
  methods: {
    login() {
      let h2 = document.getElementById("loginStatus");
      let users = this.$store.state.users;
      let user = users.find(
        (user) =>
          user.password === this.password &&
          user.username === this.$store.state.username
      );
      if (user === undefined) {
        this.message = "Invalid username or password.";
        h2.style.color = "red";
      } else {
        this.message =
          "Successfully logged in ! You will be redirected to our home page shortly.";
        h2.style.color = "green";
        setTimeout(() => this.$router.push({ name: "home" }), 5000);
      }
    },
    /*login() {
      console.log(this.$store.state.username);
      let h2 = document.getElementById("loginStatus");
      let data = localStorage.getItem(this.$store.state.username);
      if (data === null) {
        this.message = "User does not exist. Please register first.";
        h2.style.color = "red";
      } else if (data === this.password) {
        this.message =
          "Successfully logged in ! You will be redirected to our home page shortly.";
        h2.style.color = "green";
        //this.$router.push({ name: "home"})
        setTimeout(() => this.$router.push({ name: "home" }), 5000);
      } else {
        this.message = "Incorrect password !";
        h2.style.color = "red";
      }
    },*/
  },
};
</script>

<style scoped>
form {
}
.wrapper {
  text-align: center;
}

.remember {
  color: white;
  background-color: #04aa6d;
  padding: 5px;
  border-radius: 15px;
}
input[type="text"],
input[type="password"] {
  padding: 12px 20px;
  text-align: center;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  border-radius: 15px;
}
button:hover {
  opacity: 0.8;
}
label {
  color: black;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.75);
}

.container {
  padding: 16px;
}
span.psw {
  float: right;
  padding-top: 16px;
}
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
p {
  color: black;
  background-color: #04aa6d;
}
.link {
  color: blue;
}
</style>
