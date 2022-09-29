import axios from "axios";
import { Ref, ref } from "vue";

const URL = "https://localhost:5001/User";

export function useFetch(): Ref<string | null> {
  const data = ref(null);

  axios.get(URL).then((response) => (data.value = response.data));
  return data;
}
