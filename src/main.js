import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
createApp(App)
.use(router)
.mount('#app')
// @mousedown='handleEvent'
//   @mouseup='handleEvent'
//   @click='handleEvent'
//   @dblclick='handleEvent'
//   @mousemove='handleEvent'
//   @mouseover='handleEvent'
//   @mousewheel='handleEvent'
//   @mouseout='handleEvent'
//   @keypress='handleKeyPressed'
//    @keydown='handleKeyDown'
//    @keyup='handleKeyUp'
//@keyup.shift.56.exact='createList'