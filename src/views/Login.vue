<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div class="card card0 border-0">
        <div class="row d-flex">
          <div class="col-lg-6">
            <div class="card1 pb-5">
              <div class="row">
                <img src="https://i.imgur.com/CXQmsmF.png" class="logo" />
              </div>
              <div
                class="row px-3 justify-content-center mt-4 mb-5 border-line"
              >
                <img src="https://i.imgur.com/uNGdWHi.png" class="image" />
              </div>
            </div>
          </div>
          <div class="mt-4 col-lg-6">
            <div class="card border-0 px-4 py-5">
              <v-form v-on:submit.prevent>
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Email Address</h6>
                  </label>
                  <input
                    v-model="Login.email"
                    class="mb-4"
                    type="text"
                    name="email"
                    placeholder="Enter a valid email address"
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Password</h6>
                  </label>
                  <input
                  v-model="Login.password"
                    
                    type="password"
                    name="password"
                    placeholder="Enter password"
                  />
                </div>
                <div class="row px-3 mb-4">
                  <div
                    class="custom-control custom-checkbox custom-control-inline"
                  >
                    <input

                      id="chk1"
                      type="checkbox"
                      name="chk"
                      class="custom-control-input"
                    />
                    <label for="chk1" class="custom-control-label text-sm"
                      >Remember me</label
                    >
                  </div>
                  <a href="#" class="ml-auto mb-0 text-sm">Forgot Password?</a>
                </div>
                <div class="row mb-3 px-3">
                  <button type="submit" @click="Login_vue()" class="btn btn-blue text-center">
                    Login
                  </button>
                </div>
                <div class="row mb-4 px-3">
                  <small class="font-weight-bold"
                    >Don't have an account?
                    <a class="text-danger">Register</a></small
                  >
                </div>
              </v-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Home from "@/views/Home.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Login",
  components: {
    Navbar,
  },
  data() {
    return {
      Login: {},
      id: null,
      user: new FormData(),
    };
  },
  methods: {
    Login_vue() {
      this.user.append("email", this.Login.email);
      this.user.append("password", this.Login.password);

      const uri = this.$apiUrl + "/login";
      this.$http
        .post(uri, this.user)
        .then((response) => {
          this.$toast.success("Berhasil Login", {
            type: "success",
            position: "bottom",
            duration: 3000,
            dismissible: true,
          });
          this.setUserSession(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      this.$router.push({ name: "Home" });
    },
    setUserSession(data) {
      localStorage.setItem("id_user", data.id_users);
    },
  },
};
</script>

<style>
.card0 {
  box-shadow: 0px 4px 8px 0px #757575;
  border-radius: 0px;
}

.card2 {
  margin: 0px 40px;
}

.logo {
  width: 200px;
  height: 100px;
  margin-top: 20px;
  margin-left: 35px;
}

.image {
  width: 360px;
  height: 280px;
}

.border-line {
  border-right: 1px solid #eeeeee;
}

.facebook {
  background-color: #3b5998;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.twitter {
  background-color: #1da1f2;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.linkedin {
  background-color: #2867b2;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.line {
  height: 1px;
  width: 45%;
  background-color: #e0e0e0;
  margin-top: 10px;
}

.or {
  width: 10%;
  font-weight: bold;
}

.text-sm {
  font-size: 14px !important;
}

::placeholder {
  color: #bdbdbd;
  opacity: 1;
  font-weight: 300;
}

:-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

::-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

input,
textarea {
  padding: 10px 12px 10px 12px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 5px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  color: #2c3e50;
  font-size: 14px;
  letter-spacing: 1px;
}

input:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #304ffe;
  outline-width: 0;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

a {
  color: inherit;
  cursor: pointer;
}

.btn-blue {
  background-color: #1a237e;
  width: 150px;
  color: #fff;
  border-radius: 2px;
}

.btn-blue:hover {
  background-color: #000;
  cursor: pointer;
}

.bg-blue {
  color: #fff;
  background-color: #1a237e;
}

@media screen and (max-width: 991px) {
  .logo {
    margin-left: 0px;
  }

  .image {
    width: 300px;
    height: 220px;
  }

  .border-line {
    border-right: none;
  }

  .card2 {
    border-top: 1px solid #eeeeee !important;
    margin: 0px 15px;
  }
}
</style>