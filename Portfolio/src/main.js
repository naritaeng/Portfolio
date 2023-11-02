import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './reset.css' // 속성 초기화
import './font.css' // 폰트 가져오기 / 적용하고픈 곳에 font-family: 'SBAggroB'; 만 입력하면 적용됨.

createApp(App).use(router).mount('#app')
