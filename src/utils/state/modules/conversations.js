import axios from "axios";

const state = {
  head_messages: [],
};

const getters = {
  headMessages: (state) => state.head_messages,
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
      .get(`/msgs/head/`, configHeaders)
      .then((response) => {
        console.log("getConversationList", response);
        commit("setHeadMessages", response.data);
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
  setHeadMessages: (state, data) => {
    [...state.head_messages] = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
