<template>
  <div style="margin-top: 200px">
    <div class="tool">
      <h3 class="title">Project</h3>
      <h3>누르면 github로 연결됩니다.</h3>
    </div>
    <div class="project_content">
      <a href="https://github.com/Kimjw111/Teamproject" target="_blank"
        ><div class="project" title="Project" :style="style1">Chat</div></a
      >
      <a
        href="https://github.com/naritaeng/tensorflowjs/tree/main/note/%EC%95%84%EB%B2%84%EC%A7%80%EC%95%84%EB%93%A4%ED%82%A4"
        target="_blank"
        ><div class="project" :style="style2">Tensor</div></a
      >
      <a href="https://github.com/youngwan2/lookpet_web_site" target="_blank"
        ><div class="project" :style="style3" title="Project">LookPet</div></a
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      style1: { backgroundColor: 'black', color: 'white' },
      style2: { backgroundColor: 'black', color: 'white' },
      style3: { backgroundColor: 'black', color: 'white' }
    }
  },
  mounted() {
    this.change()
    this.change1()
    this.change2()
  },
  methods: {
    change() {
      const style = document.getElementsByClassName('project')[0]
      const p = document.createElement('p')
      style.addEventListener('mouseover', () => {
        this.style1 = {
          backgroundColor: '#2e8b57',
          color: 'white ',
          transition: '0.5s',
          textAlign: 'center'
        }
        p.style.cssText =
          'margin:15px 0; border-top: 1px solid black; padding-top: 20px;'
        p.innerHTML = '채팅방 만들기'
        style.append(p)
      })
      style.addEventListener('mouseleave', () => {
        this.style1 = {
          backgroundColor: 'black',
          color: 'white',
          transition: '0.5s'
        }
        style.removeChild(p)
      })
    },
    change1() {
      const style = document.getElementsByClassName('project')[1]
      const p = document.createElement('p')
      style.addEventListener('mouseover', () => {
        this.style2 = {
          backgroundColor: '#4682b4',
          color: 'white',
          transition: '0.5s',
          textAlign: 'center'
        }
        p.style.cssText =
          'margin:15px 0; border-top: 1px solid black; padding-top: 20px'
        p.innerHTML = '아버지 아들 키 데이터를 학습시켜 예상 키를 예측함'
        style.append(p)
      })
      style.addEventListener('mouseleave', () => {
        this.style2 = {
          backgroundColor: 'black',
          color: 'white',
          transition: '0.5s'
        }
        style.removeChild(p)
      })
    },
    change2() {
      const style = document.getElementsByClassName('project')[2]
      const p = document.createElement('p')
      style.addEventListener('mouseover', () => {
        this.style3 = {
          backgroundColor: '#800000',
          color: 'white',
          transition: '0.5s',
          textAlign: 'center'
        }
        p.style.cssText =
          'margin:15px 0; border-top: 1px solid black; padding-top: 20px'
        p.innerHTML = '반려동물 관련 서비스 웹 사이트 제작'
        style.append(p)
      })
      style.addEventListener('mouseleave', () => {
        this.style3 = {
          backgroundColor: 'black',
          color: 'white',
          transition: '0.5s'
        }
        style.removeChild(p)
      })
    }
  }
}
</script>
<style scoped>
div {
  font-family: 'SBAggroB';
  width: 100%;
}
div.tool {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 50px auto 0 auto;
}
h3.title {
  font-size: 2.3rem;
  text-shadow: 3px 3px 2px gray;
  margin-right: 500px;
}
div.project_content {
  /* display: flex; */
  justify-content: center;
  flex-flow: row wrap;
  margin-top: 30px;
}
a {
  text-decoration-line: none;
}
div.project {
  width: 100%;
  height: 100px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
