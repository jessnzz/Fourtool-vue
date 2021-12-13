<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" :checked="isAll" @change="checkAll" />
    </label>
    <span>
      <span>已完成{{ donetotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooters",
  props: ["todos"],
  computed: {
    total() {
      return this.todos.length;
    },
    donetotal() {
      /* let doned = 0;
      this.todos.forEach((todo) => {
        if (todo.done == true) doned++;
      });
      return doned; */
      /* return this.todos.reduce((acc, cur) => {
        if (cur.done == true) acc++;
        return acc;
      }, 0); */
      return this.todos.reduce(
        (pre, todo) => pre + (todo.done == true ? 1 : 0),
        0
      );
    },
    isAll() {
      return this.total > 0 && this.total === this.donetotal;
    },
  },
  methods: {
    checkAll(e) {
      this.$emit("checkAllTodo", e.target.checked);
    },
    clearAll() {
      this.$emit("clearAllDone");
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>