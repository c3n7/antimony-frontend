import axios from "axios";
import router from "../../router";
import getCookie from "../../cookies";

const state = {
  id: "",
  username: "",
  first_name: "",
  last_name: "",
  email: "",
  token: "",
  errors: [],
};

const getters = {
  user_id: (state) => state.id,
  username: (state) => state.username,
  token: (state) => state.token,
  fullName: (state) => `${state.first_name} ${state.last_name}`,
  errors: (state) => state.errors,
};

const actions = {
  async authenticate({ commit }, credentials) {
    await axios
      .post("/auth/login/", credentials)
      .then((response) => {
        commit("setToken", response.data.key);
        commit("setErrors", []);
        sessionStorage.setItem("token", response.data.key);
        actions.getUser({ commit });
        router.push("/messages");
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log("authenticate", error.response.data);
          commit("setErrors", error.response.data);
        } else {
          console.log("authenticate", error);
        }
      });
    console.log("Authenticating", credentials);
  },
  async getUser({ commit }) {
    // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    // axios.defaults.xsrfCookieName = "csrftoken";
    // axios.defaults.withCredentials = true;
    const sessionToken = sessionStorage.getItem("token");
    const configHeaders = {
      headers: {
        Authorization: "Token " + sessionToken, // + "dd",
      },
    };

    await axios
      .get("/auth/user/", configHeaders)
      //   .get("/auth/user/")
      .then((response) => {
        console.log("getUser", response);
        commit("setBio", response.data);
      })
      .catch((error) => {
        router.replace("/signIn");
        console.log("getUser", error);
      });
  },
  async signOut({ commit }) {
    const sessionToken = sessionStorage.getItem("token");
    const configHeaders = {
      headers: {
        Authorization: "Token " + sessionToken, // + "dd",
      },
    };

    await axios
      .post("/auth/logout/", null, configHeaders)
      .then((response) => {
        console.log("signOut", response);
        commit("setBio", {
          pk: "",
          username: "",
          email: "",
          first_name: "",
          last_name: "",
        });
        router.replace("/signIn");
      })
      .catch((error) => {
        console.log("signOut", error);
        router.replace("/signIn");
      });
  },
};

const mutations = {
  setErrors: (state, errors) => {
    state.errors = [];
    for (let [key, value] of Object.entries(errors)) {
      key = key.replaceAll("_", " ");
      if (!Array.isArray(value)) {
        state.errors.push({ key: key, value: value });
        continue;
      }
      for (let i in value) {
        state.errors.push({ key: key, value: value[i] });
      }
    }
  },
  setToken: (state, token) => (state.token = "Token " + token),
  setBio: (state, details) => {
    state.id = details.pk;
    state.username = details.username;
    state.email = details.email;
    state.first_name = details.first_name;
    state.last_name = details.last_name;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
