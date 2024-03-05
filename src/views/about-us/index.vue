<template>
  <div>
    <breadcrumb />
    <div class="gary">
      <div class="wrapper">
        <img class="image" :src="requirePath('business/address.jpg')" alt="" />
        <div class="right-box">
          <div class="title">王红梅按摩服务有限公司</div>
          <div class="desc">
            “王红梅祖传按摩”是一家以中医推拿为主，配合刮痧、走罐、拔罐、艾灸、中药熏蒸等辅助疗法的治疗养生企业。
            我们以一流的专业服务、良好的店内环境赢得了众多客户的青睐与好评，我们坚信，只有良好的口碑才能让一个企业品牌经久不衰！
          </div>
        </div>
      </div>
    </div>
    <div class="about-bottom">
      <div class="wrapper">
        <div class="aboutNum">
          <ul class="content">
            <li v-for="(num, index) in aboutNumList" :key="index">
              <div class="number">
                <span>{{ num.number }}</span>
                <span>{{ num.unit }}</span>
              </div>
              <div class="tit">{{ num.tit }}</div>
            </li>
          </ul>
        </div>
        <div class="content">
          <p class="info">
            公司秉着宏扬博大精深的中国传统中医经络养生文化，结合国际都市上海的时尚前沿养生理念，独创了适合现代人保健的大桶大疗法
            (汗术疗法)， 能有效缓解都市人群因日常工作和生活引起的亚健康
            问题。多年来，凭借着现代化的连锁企业运营模式坚持走技能专业 化、经营规模化道路，
            以独特的技术求生存、以一流的服务谋发 展，赢得了广大消费者和社会的认可。
            目前，已在江浙沪长三角城 市拥有300多家连锁分店， 具备辐射与影响全国的区域性知名品牌，
            成为连锁足浴养生行业的先锋者。
          </p>
          <ul class="list">
            <li class="list-item" v-for="item in 3">
              <img class="pic" :src="requirePath('business/address.jpg')" alt="" />
              <div class="pic-text">
                我们的理念是：“经络调理，健康自愈”。大桶大基于“康养健康管理、能量正气、阴阳调和、补充阳气、药食同源”等中医辩证理论，知行合一，
                形成了中医体系理论下的“外治功法、管理服务、医疗在线、数据平台”全服务管理体系。
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import breadcrumb from '@/components/breadcrumb'
import { requirePath } from '@/utils/index.js'

const aboutNumList = [
  {
    number: '1,999',
    tit: '成立时间',
    unit: '年'
  },
  {
    number: '15',
    tit: '覆盖门店',
    unit: '个'
  },
  {
    number: '30',
    tit: '精英技师',
    unit: '名+'
  }
]
</script>
<style lang="scss" scoped>
.gary {
  background-color: #f7f7f7;
  display: flex;
  padding: 100px 0 200px;
  .wrapper {
    display: flex;
  }
  .image {
    width: 550px;
    height: 365px;
    margin-right: 50px;
  }
  .right-box {
    flex: 1;
    font-size: 14px;
    .title {
      margin-top: 10px;
      margin-bottom: 30px;
      font-size: 26px;
      color: #333333;
    }
    .desc {
      color: #999999;
      line-height: 26px;
    }
  }
}
.about-bottom {
  .wrapper {
    margin-top: 170px;
    position: relative;
    .aboutNum {
      position: absolute;
      top: -300px;
      right: 0;
      left: 0;
      height: 240px;
      padding: 30px;
      background: #fff;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      .content {
        height: 100%;
        display: flex;
        background-image: url('@/assets/about/abg-1.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        & > li {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .number {
            position: relative;
            span:nth-of-type(1) {
              font-size: 50px;
              font-family: 'Microsoft JhengHei';
            }
            span:nth-of-type(2) {
              position: absolute;
              right: -16px;
              top: 0;
              font-size: 14px;
              color: #59413d;
              font-weight: bold;
            }
          }
          .tit {
            font-size: 14px;
            font-family: 'Microsoft JhengHei';
            color: #666;
          }
        }
      }
    }
    .content {
      .info {
        color: #999999;
        line-height: 26px;
        margin: 0 60px 30px;
        text-align: center;
      }
      .list {
        display: flex;
        .list-item {
          margin-right: 30px;
          width: 380px;
          .pic {
            width: 100%;
            height: 254px;
          }
          .pic-text {
            margin-top: 20px;
            color: #999999;
            font-size: 14px;
            line-height: 26px;
          }
        }
      }
    }
  }
}
</style>
