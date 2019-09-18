<template>
  <div class='task'>
    <v-data-table :headers="headers" :items='tasks' class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td v-if=props.item.flag class="text-xs-left"><v-btn v-on:click='TaskFinished(props.item.name)' color='info'> Done </v-btn></td>
        <td v-else class="text-xs-left"><v-btn v-on:click='TaskFinished(props.item.name)' color='warning'>Not Yet</v-btn></td>
      </template>
    </v-data-table>
  </div>
</template>

<!--<template>-->
<!--  <div class="task">-->
<!--    <table>-->
<!--      <tr>-->
<!--        <th>Task Name</th>-->
<!--        <th>Status</th>-->
<!--      </tr>-->
<!--      <tr v-for="(task, index) in tasks" :key="index">-->
<!--        <td>{{ task.name }}</td>-->
<!--        <td v-if="tasks.flg">-->
<!--          <button v-on:click="TaskFinished(task.name)">Done</button>-->
<!--        </td>-->

<!--        <td v-else>-->
<!--          <button @click="TaskFinished(task.name)">Not Yet</button>-->
<!--        </td>-->
<!--      </tr>-->
<!--    </table>-->
<!--  </div>-->
<!--</template>-->

<script>
export default {
  name: 'TaskView',
  // props: {
  //   // Array型のPropsを親から受け取ります 宣言
  //   tasks: Array
  // },

  computed: {
    tasks () {
      // これまでpropsで親から受け取っていましたが、今回はstoreを直接参照してデータをもらう。
      return this.$store.state.tasks
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Task Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Status',
          sortable: false,
          value: 'status'
        }
      ]
    }
  },
  methods: {
    // templateの部分のbuttonアクションで書いたものの実態はコレ。
    // $emitで親に'child-event'というイベント名でイベントが起きたことを通知します。
    // 第二引数を指定すると、親に値を渡すことができます。
    // click: function (msg) {
    //   // $emitで子から親に値を渡す
    //   this.$emit('child-event', msg)
    // }

    // Vuex版
    // 親コンポーネントに渡していたのでEvent渡しをしていましたが、Vuexではdispatch関数でActionsに記述した関数を呼びます。
    // 第二引数は渡したいデータ。
    TaskFinished: function (msg) {
      this.$store.dispatch('TaskFinished', msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
