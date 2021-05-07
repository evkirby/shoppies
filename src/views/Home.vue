<template>
  <div>
    <Search />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Search from "@/components/Search.vue";

@Options({
  components: {
    Search,
  },
})
export default class Home extends Vue {}
</script>
