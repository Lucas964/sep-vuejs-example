import * as types from './mutation-types'

export const removePost = ({ commit }, index) => {
   commit(types.REMOVE_POST, index)
}
export const addPost = ({ commit }, post) => {
   commit(types.ADD_POST, post)
}