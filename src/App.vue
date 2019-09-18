<template>
  <div id="app">
    <!--マテリアルUIはv-appタグで全体を囲むこと!!囲まないと色がおかしくなったりします。-->
    <v-app>
      <!--AppBarコンポーネントをサイトより拾ってくる。-->
      <AppBar></AppBar>
      <InputTask />
      <taskView />
    </v-app>
  </div>
</template>

<!--<template>-->
<!--  <div id="app">-->
<!--    <img src="./assets/logo.png" alt="" />-->

<!--    &lt;!&ndash;コンポーネントを作成。先ほど同様イベント通知を受ける宣言をここに。 受けたときに呼ぶ関数は'TaskAdded'と指定。&ndash;&gt;-->
<!--    &lt;!&ndash;InputTask(子)の$emit('child-event', msg)で通知されてる&ndash;&gt;-->
<!--    &lt;!&ndash;    <InputTask @child-event="TaskAdded" />&ndash;&gt;-->

<!--    &lt;!&ndash;前半は子のtasksというProps名に親のtasksというデータを渡す。&ndash;&gt;-->
<!--    &lt;!&ndash;後半は子がchild-eventという名前でイベントを投げたら、親はTaskFinishedというメソッドを発火する宣言&ndash;&gt;-->
<!--    &lt;!&ndash;    <Task v-bind:tasks="tasks" v-on:child-event="TaskFinished" />&ndash;&gt;-->

<!--    <InputTask />-->
<!--    <taskView />-->
<!--  </div>-->
<!--</template>-->

<script>
import TaskView from './components/TaskView'
import InputTask from './components/InputTask'
// AppBarコンポーネントをサイトより拾ってくる。
import AppBar from './components/AppBar'

export default {
  name: 'App',
  components: {
    TaskView,
    InputTask,
    AppBar
  }

  // Vuex版
  // 今まで定義していたdataもmethodsもstoreに記述したのでスッキリ
  // dataはstateに記述
  // methodsはmutationsに記述




  // data () {
  //   return {
  //     // ここでtaskの配列を与える。今回は{name(タスク名): String, flag(終了フラグ): Boolean}
  //     tasks: [
  //       {
  //         name: 'No1',
  //         flg: false
  //       },
  //       {
  //         name: 'No2',
  //         flg: false
  //       },
  //       {
  //         name: 'No3',
  //         flg: false
  //       }
  //     ]
  //   }
  // },
  // methods: {
  //   // 子からイベント名(event-child)を受け取って発火する関数。具体的に作り込んでいく部分。
  //   TaskFinished: function (msg) {
  //     this.tasks.forEach(value => {
  //       if (value.name === msg) {
  //         if (value.flg === true) {
  //           value.flg = false
  //         } else if (value.flg === false) {
  //           value.flg = true
  //         }
  //       }
  //     })
  //   },
  //   // InputTaskのイベントを受けて発火する関数。
  //   // {受け取ったタスクの名前と初期状態false}でデータ配列の末尾に追加。デバッグ用にコンソール出力も
  //   TaskAdded: function (msg) {
  //     console.log(msg)
  //     this.tasks.push({
  //       name: msg,
  //       flg: false
  //     })
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
