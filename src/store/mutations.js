import * as types from './mutation-types'

export default {
    [types.REMOVE_POST] (state, index) {
        state.blogposts.splice(index, 1);
    },
    [types.ADD_POST] (state, post) {
        state.blogposts.push(post);
    }
}