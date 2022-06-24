import {defineStore} from "pinia";
import {useState} from "nuxt/app";

export const useMainStore = defineStore('main', {
  state: () => ({
    darkMode: useState('darkMode', () => true),
    count: useState('count', () => 0),
  }),
});