import axios from "axios";

const state = {
  head_messages: [],
  current_conversation: [],
  currently_conversating_with: { first_name: "", last_name: "" },
};

const getters = {
  headMessages: (state) => state.head_messages,
  currentConversation: (state) => state.current_conversation,
  currentlyConversingWith: (state) => state.currently_conversating_with,
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
  async getCurrentConversationList({ commit }, conversingWith) {
    const sessionToken = sessionStorage.getItem("token");
    const configHeaders = {
      headers: {
        Authorization: "Token " + sessionToken, // + "dd",
      },
    };

    await axios
      .get(`/msgs/conversation/?with=${conversingWith}`, configHeaders)
      .then((response) => {
        console.log("getCurrentConversationList", response);
        commit("setCurrentConversation", {
          rdata: response.data,
          with: conversingWith,
        });
        // commit("setErrors", {});
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log("getCurrentConversationList", error.response.status);
          console.log("getCurrentConversationList", error.response.data);
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
  setCurrentConversation: (state, data) => {
    [...state.current_conversation] = data.rdata;

    state.currently_conversating_with = { first_name: "", last_name: "" };

    for (const msg of data.rdata) {
      if (msg.user_from === data.with) {
        state.currently_conversating_with = {
          first_name: msg.sender_first_name,
          last_name: msg.sender_last_name,
        };
        break;
      } else if (msg.user_to === data.with) {
        state.currently_conversating_with = {
          first_name: msg.recepient_first_name,
          last_name: msg.recepient_last_name,
        };
        break;
      }
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
