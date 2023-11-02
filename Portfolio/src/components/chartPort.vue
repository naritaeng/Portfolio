<template>
  <div>
    <Bar
      :data="data"
      :options="options"
      style="width: 80%; height: 600px; margin: auto; margin-top: 30px"
    />
    <div class="text">
      <p>위 차트는 "보유 기술력 활용 정도"에 따른 기준</p>
      <p class="count">
        4 - 대규모 프로그램 및 시스템을 참고사항(책/인터넷)없이 개발할 수
        있으며, 일반적이지 않은 난해한 부분도 일부 참고를 통해 개발할 수 있음.
      </p>
      <p class="count">
        3 - 중간규모 프로그램 및 시스템을 개발할 수 있으며, 주요 이슈
        트러블슈팅을 할 수 있을 정도로 내부구조에 대해 이해하고 있음.
      </p>
      <p class="count">
        2 - 시스템 동작 방식을 알고 있으며, 기본적인 기능을 구현할 수 있음.
      </p>
      <p class="count">
        1 - 코드를 읽을 수 있으며, 책을 참고하여 약간의 수정작업 또는 작은
        변경사항 추가를 할 수 있음.
      </p>
      <p class="count">0 - 경험/지식 없음.</p>
    </div>
  </div>
</template>
<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: 'ChartP',
  components: {
    Bar
  },
  data() {
    return {
      data: {
        labels: [
          'HTML / CSS / JS',
          'Vuejs',
          'Nodejs',
          'MongoDB',
          'Github',
          'Tensorflowjs',
          'Figma',
          'illustrator',
          'Photoshop'
        ], // x축 이름
        datasets: [
          {
            label: '',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)'
            ],
            data: [3, 2, 2, 2, 3, 1, 2, 1, 1] // 그래프 값
          }
        ]
      },
      options: {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        scales: {
          x: {
            max: 4,
            min: 0,
            ticks: {
              stepSize: 1
            }
          }
        },
        elements: {
          bar: {
            borderWidth: 2
          }
        },
        // responsive: true,
        plugins: {
          legend: {
            position: 'none'
          },
          title: {
            display: true,
            text: '나의 스킬지수'
          }
        }
      }
    }
  }
}
</script>
<style scoped>
div {
  font-family: 'SBAggroB';
}

div.text {
  width: 600px;
  margin: auto;
}
p {
  font-size: 1rem;
  margin-top: 15px;
}
p.count {
  font-size: 13px;
  margin-top: 10px;
}
</style>
