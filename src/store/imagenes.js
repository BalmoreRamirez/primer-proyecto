import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    Items: [],
  },
  getters: {
    Items(state) {
      return state.Items;
    },
  },
  mutations: {
    LlenarItems(state, data) {
      state.Items = data;
    },
  },
  actions: {
    cargarImagen: async function ({ commit }) {
      try {
        const setting = {
          method: "GET",
        };
        const url = "https://picsum.photos/v2/list?page=2&limit=10";
        const data = await fetch(url, setting);
        const json = await data.json();
        commit("LlenarItems", json);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
