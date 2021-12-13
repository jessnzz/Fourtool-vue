<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: blue">Count组件和为：{{ sum }}</h3>
    <h3>列表中第一个人的名字是：{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addPersonZhang">添加一个老张</button>
    <button @click="addPersonServe">添加随机</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },
    firstPersonName() {
      return this.$store.getters["personAbout/getFirstPerson"];
    },
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personAbout/addPerson", personObj);
      this.name = "";
    },
    addPersonZhang() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personAbout/addPersonZhang", personObj);
      this.name = "";
    },
    addPersonServe() {
      this.$store.dispatch("personAbout/addPersonServe");
    },
  },
};
</script>

<style>
</style>