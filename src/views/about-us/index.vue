<template>
  <div>
    <breadcrumb />
    <div class="gary">
      <div class="wrapper animate__fadeInUp onMounted-wow">
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
        <div class="aboutNum animate__fadeInUp onMounted-wow">
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
            “王红梅祖传按摩”是一家历经五十多年的品牌老店，具有厚重的中华中医文化底蕴，是芜湖市中医推拿界的权威品牌。
            “王红梅祖传按摩”前身是芜湖著名医师陶宜珍女士创办的“芜湖市盲人按摩诊所”，是芜湖最早一批中医推拿机构。
            自1999年陶宜珍所长去世后，传其爱徒王红梅医师接管并更名为“王红梅祖传按摩中心”。
            多年来，王红梅医师一直秉承“以人为本”的理念和“健康服务”的原则，不断研究探索中医推拿技术，
            积累临床经验，2019年创办“王红梅职业培训学校”广收门徒传授所学，培养优秀团队。时至今日，
            已从当年的单人个体户发展至拥有多家连锁门店、几十位精英技师团队的连锁企业。
            而千千万万的江城人民也在“王红梅祖传按摩中心”得到了病痛的缓解和治疗，感受到中医文化的博大精深。
          </p>
          <ul class="list animate__fadeInUp onMounted-wow">
            <li class="list-item" v-for="(item, i) in imgList" :key="i">
              <img class="pic" :src="requirePath(item)" alt="" />
              <!--              <div class="pic-text">-->
              <!--                我们的理念是：“经络调理，健康自愈”。大桶大基于“康养健康管理、能量正气、阴阳调和、补充阳气、药食同源”等中医辩证理论，知行合一，-->
              <!--                形成了中医体系理论下的“外治功法、管理服务、医疗在线、数据平台”全服务管理体系。-->
              <!--              </div>-->
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
import { onMounted } from 'vue'
import WOW from 'wow.js'
onMounted(() => {
  const wowInt = new WOW({
    // 对所有拥有该class的元素挂载动画
    boxClass: 'onMounted-wow',
    // 需要挂载的动画元素
    animateClass: 'animate__animated',
    // 偏移值（即偏移一定距离后再执行动画，推荐设置！）
    offset: 100,
    // 移动设备是否生效
    mobile: true,
    // 是否支持异步
    live: true
  })
  wowInt.init()
})

const imgList = [
  'qualifications/photo1.jpg',
  'qualifications/photo2.jpg',
  'qualifications/photo3.jpg'
]

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
@import '@/assets/style/variable';
.gary {
  background-color: #f7f7f7;
  display: flex;
  padding: 100px 0 200px;
  .wrapper {
    display: flex;
    @include media($breakpoint-md) {
      flex-direction: column;
      align-items: center;
    }
  }
  .image {
    width: 550px;
    height: 365px;
    margin-right: 50px;
    @include media($breakpoint-md) {
      max-width: 300px;
      height: 210px;
      margin-right: 0;
    }
  }
  .right-box {
    flex: 1;
    font-size: 14px;
    .title {
      margin-top: 10px;
      margin-bottom: 30px;
      font-size: 26px;
      color: #333333;
      @include media($breakpoint-md) {
        text-align: center;
      }
    }
    .desc {
      color: #999999;
      line-height: 26px;
      @include media($breakpoint-md) {
        padding: 0 30px;
      }
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
        @include media($breakpoint-md) {
          background-image: none;
        }
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
        @include media($breakpoint-md) {
          line-height: 36px;
          font-size: 14px;
        }
      }
      .list {
        display: flex;
        @include media($breakpoint-md) {
          flex-wrap: wrap;
        }
        .list-item {
          margin-right: 30px;
          width: 380px;
          @include media($breakpoint-md) {
            margin: 0 30px 30px;
          }
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
