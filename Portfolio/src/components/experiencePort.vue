<template>
  <div>
    <div class="title"><h3 class="title">Project Screen</h3></div>
    <div class="block">
      <img src="../assets/projectscreen.jpg" alt="" class="img" />
      <div class="content">
        <span>프로젝트 실습('23.08 ~ '23.9)</span>
        <span>주제 : 반려동물 관련 서비스 웹사이트 제작</span>
        <span>담당역할 : 프론트,백엔드,디자인</span>
        <span>서비스 :</span>
        <span>- 품종 찾기</span>
        <span>- 반려동물 동반가능 병원,문화시설 찾기</span>
        <span>- 마이페이지 구현(펫 등록)</span>
        <span>- 커뮤니티 공간 제공</span>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
div {
  margin-top: 100px;
  font-family: 'SBAggroB';
  width: 1000px;
  display: flex;
  flex-direction: column;
}
h3.title {
  font-size: 2.3rem;
  text-shadow: 3px 3px 2px gray;
  margin-left: 30px;
  margin-bottom: 30px;
}
span {
  width: 800px;
  margin: 10px 30px;
}
div.block {
  border: 3px double black;
  padding: 10px;
  margin: 10px 0 25px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: linear-gradient(rgba(0, 0, 0), rgb(228, 142, 142));
}
div.block img.img {
  width: 50%;
  height: 300px;
  border: 1px solid black;
  box-shadow: 3px 3px 10px gray;
}
div.block div.content {
  margin: 0;
}
div.block span {
  width: 550px;
}
</style>
