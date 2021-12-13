<template>
  <div>
    <h1>当前和为：{{ sum }}</h1>
    <h1>我在{{ school }}学{{ subject }}</h1>
    <h3>当前和放大10倍为：{{ bigSum }}</h3>
    <h3 style="color: orange">Person组件总人数为：{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="Plus(n)">+</button>
    <button @click="Decrease(n)">-</button>
    <button @click="PlusOdd(n)">和为奇数再加</button>
    <button @click="PlusWait(n)">等一会再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    // plus() {
    //   this.$store.commit("Plus", this.n);
    // },
    // decrease() {
    //   this.$store.commit("Decrease", this.n);
    // },
    ...mapMutations("countAbout", ["Plus", "Decrease"]),
    // plusOdd() {
    //   this.$store.dispatch("PlusOdd", this.n);
    // },
    // plusWait() {
    //   this.$store.dispatch("PlusWait", this.n);
    // },
    ...mapActions("countAbout", ["PlusOdd", "PlusWait"]),
  },
  computed: {
    ...mapState("countAbout", ["sum", "school", "subject"]),
    ...mapState("personAbout", ["personList"]),
    //展开为sum(){return $store.state.sum}.........
    ...mapGetters("countAbout", ["bigSum"]),
  },
};
</script>

<style scope>
button {
  margin-left: 10px;
}
</style>