<template>
  <header>
    <div class="title"><h3 class="title">Tools</h3></div>
    <div class="tool">
      <div class="front">
        <span>FrontEnd</span>
        <img src="../assets/html.png" alt="" />
        <img src="../assets/vuejs.png" alt="" />
        <img src="../assets/chartjs.png" alt="" />
        <img src="../assets/googlefont.png" alt="" />
      </div>
      <div class="back">
        <span>BackEnd</span>
        <img src="../assets/nodejs.png" alt="" />
        <img src="../assets/expressjs.png" alt="" />
        <img src="../assets/axios.png" alt="" />
        <img src="../assets/dataportal.png" alt="" />
        <div class="rectangle">
          <img src="../assets/papago.png" alt="" />
          <img src="../assets/botfather.jpg" alt="" />
        </div>
      </div>
      <div class="ai_etc">
        <div class="ai">
          <span>A.I</span>
          <img src="../assets/tensorflow.png" alt="" />
          <img src="../assets/chatGPT.png" alt="" />
          <img src="../assets/KoGPT.png" alt="" />
        </div>
        <div class="db">
          <span>DB</span>
          <img src="../assets/MongoDB.png" alt="" />
          <img src="../assets/mongoose.png" alt="" />
        </div>
      </div>
      <div class="control_etc">
        <div class="control">
          <span>Control</span>
          <img src="../assets/git.png" alt="" />
          <img src="../assets/github.png" alt="" />
        </div>
        <div class="etc">
          <span>ETC</span>
          <img src="../assets/Figma.png" alt="" />
          <div class="rectangle">
            <img src="../assets/Ps.jpg" alt="" />
            <img src="../assets/Ai.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script></script>
<style scoped>
header {
  font-family: 'SBAggroB';
}
div.title {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 1000px;
  margin: auto;
  padding-left: 30px;
}
h3.title {
  font-size: 2.3rem;
  text-shadow: 3px 3px 2px gray;
}
div.tool {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  margin: auto;
}
div.front {
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 10px 10px 10px gray;
}
div.front:hover {
  transform: translateY(-20px);
  transition: 0.75s;
}
div.front span {
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding: 20px 0;
  border-bottom: 3px double black;
}
div.front img {
  margin: 15px 10px;
  margin-bottom: 0px;
  width: 200px;
}
div.front img:last-child {
  margin: 15px 10px;
  width: 200px;
}
div.back {
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 10px 10px 10px gray;
}
div.back:hover {
  transform: translateY(-20px);
  transition: 0.75s;
}
div.back span {
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding: 20px 0;
  border-bottom: 3px double black;
}
div.back img {
  margin: 15px 10px;
  margin-bottom: 0px;
  width: 200px;
}
div.back div.rectangle img {
  width: 100px;
}
div.back img:last-child {
  margin: 15px 10px;
  width: 200px;
}
div.ai_etc {
  display: flex;
  flex-direction: column;
}
div.ai_etc div.ai {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}
div.ai_etc div.ai {
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 10px 10px 10px gray;
}
div.ai_etc div.ai:hover {
  transform: translateY(-20px);
  transition: 0.75s;
}
div.ai_etc div.ai span {
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding: 20px 0;
  border-bottom: 3px double black;
}
div.ai_etc div.ai img {
  margin: 15px 10px;
  margin-bottom: 0px;
  width: 200px;
}
div.ai_etc div.ai div.rectangle img {
  width: 100px;
}
div.ai_etc div.ai img:last-child {
  margin: 15px 10px;
  width: 200px;
}

div.ai_etc div.db {
  display: flex;
  flex-direction: column;
}
div.ai_etc div.db {
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 10px 10px 10px gray;
}
div.ai_etc div.db:hover {
  transform: translateY(-20px);
  transition: 0.75s;
}
div.ai_etc div.db span {
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding: 20px 0;
  border-bottom: 3px double black;
}
div.ai_etc div.db img {
  margin: 15px 10px;
  margin-bottom: 0px;
  width: 200px;
}
div.ai_etc div.db img:last-child {
  margin: 15px 10px;
  width: 200px;
}

div.control_etc {
  display: flex;
  flex-direction: column;
}
div.control_etc div.control {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}
div.control_etc div.control {
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 10px 10px 10px gray;
}
div.control_etc div.control:hover {
  transform: translateY(-20px);
  transition: 0.75s;
}
div.control_etc div.control span {
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding: 20px 0;
  border-bottom: 3px double black;
}
div.control_etc div.control img {
  margin: 15px 10px;
  margin-bottom: 0px;
  width: 200px;
}
div.control_etc div.control img:last-child {
  margin: 15px 10px;
  width: 200px;
}

div.control_etc div.etc {
  display: flex;
  flex-direction: column;
}
div.control_etc div.etc {
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 10px 10px 10px gray;
}
div.control_etc div.etc:hover {
  transform: translateY(-20px);
  transition: 0.75s;
}
div.control_etc div.etc span {
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding: 20px 0;
  border-bottom: 3px double black;
}
div.control_etc div.etc img {
  margin: 15px 10px;
  width: 200px;
}
div.control_etc div.etc div.rectangle img {
  width: 100px;
}
div.control_etc div.etc img:last-child {
  margin: 15px 10px;
  width: 200px;
}
</style>
