import { createStore } from 'vuex'
import { Post, usePost } from '@/models/post'

const { createPost } = usePost()

const posts: Post[] = [
  createPost(
    'Vue 3 First Impression',
    [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel enim et tellus tempor aliquet. Nulla et laoreet ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus semper sodales sapien, a blandit libero ornare id. Suspendisse commodo odio at tellus imperdiet, sit amet volutpat neque placerat. Duis mollis semper tortor in imperdiet. Phasellus pretium mi eget porttitor aliquet. Duis eleifend velit at turpis consequat vulputate.',
      'Pellentesque leo ligula, auctor ac justo quis, vulputate luctus diam. Aliquam quis finibus sem. Etiam eu justo imperdiet metus sagittis lobortis sed sit amet purus. Nulla id rhoncus tellus, vel egestas turpis. Duis quis ante ut mauris dignissim volutpat ac eget neque. Ut dui justo, pulvinar eget purus quis, facilisis semper leo. Mauris faucibus sodales nulla, ac porta diam molestie id. Vivamus quis interdum nulla, ut euismod risus. Etiam consectetur ex at mauris vehicula, sed maximus magna congue. Nullam sit amet tellus quam. Vivamus quam quam, maximus quis molestie quis, euismod in eros. Aliquam erat volutpat. Mauris sit amet ligula vel eros imperdiet consectetur nec vitae nisi. Nam tincidunt cursus bibendum. Fusce sodales enim quis sem varius rutrum.',
      'Sed sit amet tristique turpis. Aliquam porta justo egestas semper accumsan. Vivamus sit amet ligula dui. Vestibulum non augue cursus turpis fringilla blandit non nec sapien. Quisque aliquet elementum bibendum. Suspendisse nisi tortor, iaculis at sollicitudin vitae, imperdiet et dolor. Maecenas non erat tincidunt, vehicula tellus eu, euismod massa. Nullam posuere arcu nec velit placerat semper. Integer id consectetur nibh. Integer at purus sit amet elit sagittis lobortis nec ut ligula. Phasellus aliquet odio et nibh aliquam semper. Nullam tempor ut tellus eget viverra. Nam vitae nulla id sapien hendrerit sodales. Mauris a justo volutpat, euismod lectus sed, euismod purus. Vestibulum congue, libero in porttitor dictum, elit mi commodo ex, ac tempus nulla nulla nec nulla. Nullam euismod eleifend mauris, nec suscipit sapien lobortis eu.',
      'Quisque magna dolor, consectetur a erat ac, auctor auctor lectus. Mauris sodales arcu quis gravida lobortis. Morbi in ex et massa ornare suscipit volutpat ultricies augue. Donec ac ex eget mauris egestas eleifend. Nam tincidunt nisi risus, vitae aliquet felis congue nec. Nulla rhoncus ligula a augue mollis, id tristique metus suscipit. Nam iaculis quis arcu vitae interdum.',
      'Aenean at enim ac leo interdum dictum nec scelerisque est. Suspendisse potenti. Donec odio velit, maximus id diam vitae, lacinia finibus neque. Cras eget accumsan nisl, vel dictum dui. Nunc sit amet viverra elit. Etiam nibh odio, ultricies vel aliquet sit amet, mattis ac est. Cras ultrices fringilla ultricies. Maecenas ultrices nisl quis magna accumsan lobortis ac eu urna. Mauris scelerisque pretium venenatis. Nulla rutrum facilisis lectus at dapibus. Quisque ac risus in libero ultricies accumsan quis vel diam.',
    ],
    "Larry Yang",
    new Date("2020-10-01")
  ),
  createPost(
    'Using Vuex with Vue 3',
    [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel enim et tellus tempor aliquet. Nulla et laoreet ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus semper sodales sapien, a blandit libero ornare id. Suspendisse commodo odio at tellus imperdiet, sit amet volutpat neque placerat. Duis mollis semper tortor in imperdiet. Phasellus pretium mi eget porttitor aliquet. Duis eleifend velit at turpis consequat vulputate.',
      'Pellentesque leo ligula, auctor ac justo quis, vulputate luctus diam. Aliquam quis finibus sem. Etiam eu justo imperdiet metus sagittis lobortis sed sit amet purus. Nulla id rhoncus tellus, vel egestas turpis. Duis quis ante ut mauris dignissim volutpat ac eget neque. Ut dui justo, pulvinar eget purus quis, facilisis semper leo. Mauris faucibus sodales nulla, ac porta diam molestie id. Vivamus quis interdum nulla, ut euismod risus. Etiam consectetur ex at mauris vehicula, sed maximus magna congue. Nullam sit amet tellus quam. Vivamus quam quam, maximus quis molestie quis, euismod in eros. Aliquam erat volutpat. Mauris sit amet ligula vel eros imperdiet consectetur nec vitae nisi. Nam tincidunt cursus bibendum. Fusce sodales enim quis sem varius rutrum.',
      'Sed sit amet tristique turpis. Aliquam porta justo egestas semper accumsan. Vivamus sit amet ligula dui. Vestibulum non augue cursus turpis fringilla blandit non nec sapien. Quisque aliquet elementum bibendum. Suspendisse nisi tortor, iaculis at sollicitudin vitae, imperdiet et dolor. Maecenas non erat tincidunt, vehicula tellus eu, euismod massa. Nullam posuere arcu nec velit placerat semper. Integer id consectetur nibh. Integer at purus sit amet elit sagittis lobortis nec ut ligula. Phasellus aliquet odio et nibh aliquam semper. Nullam tempor ut tellus eget viverra. Nam vitae nulla id sapien hendrerit sodales. Mauris a justo volutpat, euismod lectus sed, euismod purus. Vestibulum congue, libero in porttitor dictum, elit mi commodo ex, ac tempus nulla nulla nec nulla. Nullam euismod eleifend mauris, nec suscipit sapien lobortis eu.',
      'Quisque magna dolor, consectetur a erat ac, auctor auctor lectus. Mauris sodales arcu quis gravida lobortis. Morbi in ex et massa ornare suscipit volutpat ultricies augue. Donec ac ex eget mauris egestas eleifend. Nam tincidunt nisi risus, vitae aliquet felis congue nec. Nulla rhoncus ligula a augue mollis, id tristique metus suscipit. Nam iaculis quis arcu vitae interdum.',
      'Aenean at enim ac leo interdum dictum nec scelerisque est. Suspendisse potenti. Donec odio velit, maximus id diam vitae, lacinia finibus neque. Cras eget accumsan nisl, vel dictum dui. Nunc sit amet viverra elit. Etiam nibh odio, ultricies vel aliquet sit amet, mattis ac est. Cras ultrices fringilla ultricies. Maecenas ultrices nisl quis magna accumsan lobortis ac eu urna. Mauris scelerisque pretium venenatis. Nulla rutrum facilisis lectus at dapibus. Quisque ac risus in libero ultricies accumsan quis vel diam.',
    ],
    "Larry Yang",
    new Date("2020-10-05")
  ),
]

export default createStore({
  state: {
    posts: posts
  },
  getters: {
    sortedPosts(state): Post[] {
      return state.posts.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime())
    }
  },
  mutations: {
    addPostSuccess(state, newPost: Post) {
      state.posts.push(newPost)
    }
  },
  actions: {
    addPost({ commit }, newPost: Post) {
      commit('addPostSuccess', newPost)  
    }
  },
  modules: {
  }
})
