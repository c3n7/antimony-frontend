import axios from "axios";

const state = {
  //
};

const getters = {
  //
};

const actions = {
  async getConversationList({ commit }) {
    const sessionToken = sessionStorage.getItem("token");
    const configHeaders = {
      headers: {
        Authorization: "Token " + sessionToken, // + "dd",
      },
    };

    await axios
      .get(`/msgs/`, configHeaders)
      .then((response) => {
        console.log("getConversationList", response);
        // commit("setParentList", response.data);
        // commit("setErrors", {});
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log("getConversationList", error.response.status);
          console.log("getConversationList", error.response.data);
        } else {
          console.log(error);
        }
      });
  },
};

const mutations = {
  //
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
