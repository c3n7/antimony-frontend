import Vuex from "vuex";
import auth from "./modules/auth";
import conversations from "./modules/conversations";

export default new Vuex.Store({
  modules: {
    auth,
    conversations,
  },
});
