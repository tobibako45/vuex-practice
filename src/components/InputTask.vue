<template>
  <div class='InputTask'>
    <v-layout row wrap>
      <v-flex xs6>
        <v-form ref='form' v-on:submit.prevent='addtask(taskname)'>
          <!--form内部を全部マテリアルUIに変更-->
          <v-text-field v-model='taskname' placeholder='input the task'></v-text-field>
          <v-btn v-on:click.prevent='addtask(taskname)' color='success' dark>Submit</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>

<!--<template>-->
<!--  <div class="InputTask">-->
<!--    &lt;!&ndash;formタグ内に書いていきます。v-on:submitとv-on:clickという２パターンのイベントを書いていますが、発火する関数はどちらもaddtaskです。&ndash;&gt;-->
<!--    <form @submit.prevent="addtask(taskname)">-->
<!--      &lt;!&ndash;v-modelでバインド(結び付ける)&ndash;&gt;-->
<!--      <input type="text" v-model="taskname" placeholder="input ths task"/>-->
<!--      &lt;!&ndash;preventで、formを飛ばないようにしている&ndash;&gt;-->
<!--      <button @click.prevent="addtask(taskname)">Submit</button>-->
<!--    </form>-->
<!--  </div>-->
<!--</template>-->

<!--
Vuexを使う場合には、コンポーネントから参照/変更するデータの管理はStateに行い、データ処理部分は、該当するMutationsに記述します。MutationsはVuexのActionsから呼び出される決まりなので、子コンポーネントから直接呼び出すのはActionsです。
-->

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
    // addtask: function (msg) {
    //   this.$emit('child-event', msg)
    //   // イベントを通知したら一応、初期化します。
    //   this.taskname = ''
    // }

    // Vuex版
    addtask: function (msg) {
      // 親コンポーネントに渡していたのでEvent渡しをしていましたが、Vuexではdispatch関数でActionsに記述した関数を呼びます。
      // 第二引数は渡したいデータ。
      this.$store.dispatch('TaskAdded', msg)
      // イベントを通知したら一応、初期化します。
      this.taskname = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input{
  width: 130pt;
  height:30pt;
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
