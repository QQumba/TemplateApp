<template>
  <div>{{ resp }}</div>
  <div v-if="d">useFetch: {{ d }}</div>
  <div v-for="l in ls" :key="l">{{ l }}</div>
  <div v-for="(val, k) in o" :key="val">{{ k }}:{{ val }}</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { ref } from "vue";
import axios from "axios";
import { useFetch } from "../composables/useFetch";

export default class ExternalApiView extends Vue {
  public resp = ref(null);
  public ls: number[] = [1, 2, 3, 4];
  o = { a: "aboba", b: "pkpp" };

  public d = useFetch();

  public beforeMount() {
    this.fetch();
  }

  private fetch() {
    const url = "https://localhost:5001/User";
    axios.get(url).then((response) => {
      this.resp = response.data;
      console.log();
    });
  }
}
</script>
