// import { createStore } from 'vuex'

// const store = createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {


//   }
// })
// export default store


import {
  createStore,
  type Store as VuexStore,
  type CommitOptions,
  type DispatchOptions,
  createLogger
} from 'vuex'

import { State, state } from './state'
import type { Mutations } from './mutations'
import type { Actions } from './actions'
import type { Getters } from './getters'

import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'

const store = createStore<State>({
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  state,
  mutations,
  actions,
  getters
})

export function useStore() {
  return store as Store
}

export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}
export default store





