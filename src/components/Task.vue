<template>
  <div class="task">
    <table>
      <tr>
        <th>Task Name</th>
        <th>Status</th>
      </tr>
      <tr v-for="(task, index) in tasks" :key="index">
        <td>{{ task.name }}</td>
        <td v-if="task.flg">
          <button v-on:click="click(task.name)">Done</button>
        </td>

        <td v-else>
          <button @click="click(task.name)">Not Yet</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    // Array型のPropsを親から受け取ります 宣言
    tasks: Array
  },
  methods: {
    // templateの部分のbuttonアクションで書いたものの実態はコレ。
    // $emitで親に'child-event'というイベント名でイベントが起きたことを通知します。
    // 第二引数を指定すると、親に値を渡すことができます。
    click: function (msg) {
      // $emitで子から親に値を渡す
      this.$emit('child-event', msg)
    }
  }
}
</script>

<style scoped></style>
