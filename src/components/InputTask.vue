<template>
  <div class="InputTask">
    <!--formタグ内に書いていきます。v-on:submitとv-on:clickという２パターンのイベントを書いていますが、発火する関数はどちらもaddtaskです。-->
    <form @submit.prevent="addtask(taskname)">
      <!--v-modelでバインド(結び付ける)-->
      <input type="text" v-model="taskname" placeholder="input ths task"/>
<!--preventで、formを飛ばないようにしている-->
      <button @click.prevent="addtask(taskname)">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'InputTask',
  data () {
    return {
      taskname: 'oopoppop'
    }
  },
  methods: {
    // v-onで定義したアクションから呼ばれる関数です。
    // v-on:clickもv-on:submitもどちらもchild-eventという名前で親に通知します。
    // 親からしたらエンターキーで追加されたか、submitボタン押で追加されたかはどうでもよく、イベント発火のみを判断して処理したいからです。
    addtask: function (msg) {
      this.$emit('child-event', msg)
      // イベントを通知したら一応、初期化します。
      this.taskname = ''
    }
  }
}
</script>

<style scoped>
  .input {
    width: 130pt;
    height: 30pt;
  }

  .button {
    display: block;
    position: relative;
    margin: 0 auto;
    width: 70pt;
    border: solid 1px silver;
    border-radius: 0.5rem 0.5rem;
    padding: 0.5rem 1.5rem;
    margin-top: 1rem;
    text-decoration: none;
  }
</style>
