import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // 初期データ
  state: {
    // 状態を定義
    tasks: [
      {
        name: 'No1',
        flag: false
      },
      {
        name: 'No2',
        flag: true
      },
      {
        name: 'No3',
        flag: false
      }
    ]
  },
  //  実際のStateのデータを更新する処理を記述
  mutations: {
    TaskFinished: (state, payload) => {
      state.tasks.forEach(value => {
        if (value.name === payload) {
          if (value.flag === true) {
            value.flag = false
          } else if (value.flag === false) {
            value.flag = true
          }
        }
      })
    },
    TaskAdded: (state, payload) => {
      console.log(payload)
      state.tasks.push({
        name: payload,
        flag: false
      })
    }
  },

  // コンポーネントからリクエストを受けて、処理する下準備をするための関数
  actions: {
    TaskFinished: (context, payload) => {
      // 例えばバックエンドDBからのデータ取得などは、ここで済ませること
      // commit関数で、Mutationsで定義した関数を指定して呼び出す
      context.commit('TaskFinished', payload)
    },
    TaskAdded: (context, payload) => {
      context.commit('TaskAdded', payload)
    }
  }
})
