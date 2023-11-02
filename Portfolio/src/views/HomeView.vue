<template>
  <div class="title_bar" :style="color">
    <div id="title_name" @click="goTop()">Seongjun's Portfolio</div>
    <div id="link_content">
      <span class="click" @click="move('#Header')">Tool</span>
      <span class="click" @click="move('#Project')">Project</span>
      <span class="click" @click="move('#Experience')">Experiences</span>
      <span
        ><a href="https://github.com/naritaeng" target="_blank">
          <img src="../assets/github.png" alt="깃허브" /></a
      ></span>
    </div>
  </div>
  <div>
    <div class="img">
      <span class="text"></span>
    </div>
  </div>
  <button v-if="show" @click="goTop()">
    <img src="../assets/Top_Arrow.svg" alt="" /><span>맨 위로</span>
  </button>
  <Header id="Header" />
  <Content id="Content" />
  <Footer id="Footer" />
</template>

<script>
import Header from '../components/headerTool.vue'
import Content from '../components/contentProject.vue'
import Footer from '../components/FooterPort.vue'
export default {
  name: 'PortFolio',
  components: {
    Header,
    Content,
    Footer
  },
  data() {
    return {
      color: { backgroundColor: 'rgba(255,255,255,0)' },
      show: false
    }
  },
  mounted() {
    document.addEventListener('scroll', this.scroll)
    document.addEventListener('scroll', this.scrollClass)
    this.typingEffect()
  },
  methods: {
    scroll() {
      if (window.scrollY > 500) {
        this.show = true
        this.color = {
          backgroundColor: 'white',
          color: 'black'
        }
      } else {
        this.show = false
        this.color = { backgroundColor: 'rgba(255,255,255,0)' }
      }
    },
    goTop() {
      window.scrollTo({
        top: '0px',
        behavior: 'smooth'
      })
    },
    typingEffect() {
      const content = '경쟁력 있는 개발자가 되고 싶은 김성준입니다!'
      const text = document.querySelector('.text')
      let index = 0

      function sleep(delay) {
        const start = new Date().getTime()
        while (new Date().getTime() < start + delay);
      }

      function typing() {
        text.textContent += content[index++]
        if (index > content.length) {
          text.textContent = ''
          index = 0
          sleep(1500)
        }
      }
      setInterval(typing, 200)
    },
    move(moveto) {
      let PageLocation = document.querySelector(moveto).offsetTop
      window.scrollTo({ top: PageLocation - 70, behavior: 'smooth' })
    },
    scrollClass() {
      const header = document.querySelector('#Header')
      if (window.scrollY >= 150) {
        header.className = 'scroll'
      }
    }
  }
}
</script>

<style scoped>
div.title_bar {
  font-family: 'SBAggroB';
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  position: fixed;
  color: white;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 100;
}
div#title_name {
  font-size: 2rem;
  color: rgb(38, 47, 128);
  text-shadow: 3px 3px 3px rgb(113, 127, 255);
}
div#title_name:hover {
  cursor: pointer;
}
div#link_content {
  display: flex;
  align-items: center;
}
div#link_content span:first-child {
  margin-left: 0px;
}
div#link_content span {
  margin-left: 20px;
  font-size: 1rem;
  color: rgb(0, 0, 0);
  text-shadow: 3px 3px 3px rgb(87, 85, 85);
}
a {
  display: flex;
}
img {
  width: 36px;
  height: 36px;
}
div.img {
  background-image: linear-gradient(
      rgba(199, 199, 199, 0.7),
      rgba(255, 255, 255, 1)
    ),
    url('../assets/code-1076536_1920.jpg');
  width: 100%;
  height: 600px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
span.text {
  font-family: 'SBAggroB';
  font-size: 3rem;
}
span.click:hover {
  cursor: pointer;
  color: gray;
}
button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
}

Header {
  opacity: 0;
}

@keyframes moveUp {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.scroll {
  opacity: 1;
  animation: moveUp 2s linear forwards; /* 애니메이션 이름, 지속 시간 및 타이밍 함수 설정 */
}
@keyframes moveUp {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
