<template>
  <div>
    <swiper :initial-slide="1" :pagination="{ clickable: true }" :centered-slides="true">
      <swiper-slide v-for="item in ['swiper/swiper-1.jpg', 'swiper/swiper-2.jpg']" :key="item">
        <div class="swiper-item">
          <img
            :src="requirePath(item)"
            alt=""
            style="width: 100%; height: 100%; object-fit: cover"
          />
        </div>
      </swiper-slide>
    </swiper>
    <div class="main-container">
      <div class="about max-1700">
        <div class="warp-title">
          <span>公 · 司 · 介 · 绍</span>
          <div class="line"></div>
        </div>
        <div class="about-content wrapper">
          <div class="about-left">
            <p>王红梅祖传按摩</p>
            <p>
              “王红梅祖传按摩”是一家历经五十多年的品牌老店，具有厚重的中华中医文化底蕴，
              是芜湖市中医推拿界的权威品牌。“王红梅祖传按摩”前身是芜湖著名医师陶宜珍女士
              创办的“芜湖市盲人按摩诊所”，是芜湖最早一批中医推拿机构。自1999年陶宜珍所长
              去世后，传其爱徒王红梅医师接管并更名为“王红梅祖传按摩中心” ...
            </p>
            <div class="btn">查看更多></div>
          </div>
          <div class="about-right">
            <img style="width: 500px; height: 500px" :src="requirePath('katong.png')" alt="" />
          </div>
        </div>
      </div>
      <div class="culture max-1700">
        <div class="warp-title">
          <span>品 · 牌 · 文 · 化</span>
          <div class="line"></div>
        </div>
        <ul class="culture-list wrapper">
          <li v-for="item in 3" :key="item">
            <div class="circle">王红梅</div>
            <div class="cul-border"></div>
            <div class="tit">
              <p>医疗护理</p>
              <p>祛风除湿、强身健体</p>
            </div>
            <div class="cul-border"></div>
          </li>
        </ul>
      </div>
      <div class="business max-1700">
        <div class="warp-title">
          <span>业 · 务 · 模 · 块</span>
          <div class="line"></div>
        </div>
        <ul class="business-list wrapper">
          <li v-for="item in 4" :key="item">
            <div class="tit">
              <p>艾灸类</p>
              <p>
                推拿又称“按摩”，是以中医的脏腑、经络学说为理论基础，并结合西医的解剖和病理诊断，
                而用手法作用于人体体表的特定部位以调节机体生理、病理状况，达到理疗目...
              </p>
            </div>
            <img
              style="width: 180px; height: 180px; overflow: hidden; border-radius: 50%"
              :src="requirePath('business/address.jpg')"
              alt=""
            />
          </li>
        </ul>
        <div class="btn-box">
          <span class="btn">查看更多></span>
        </div>
      </div>
      <div class="storeInfo max-1700">
        <div class="warp-title">
          <span>门 · 店 · 信 · 息</span>
          <div class="line"></div>
        </div>
        <ul class="store-list wrapper">
          <li v-for="item in 3" :key="item">
            <img
              style="width: 100%; height: 242px"
              :src="requirePath('business/address.jpg')"
              alt=""
            />
            <div class="tit">
              <p>上海店</p>
              <p>地址：浙江省杭州市拱墅区1号大悦城购物中心 L5-26号 电话：0571-88399189</p>
            </div>
          </li>
        </ul>
        <div class="btn-box">
          <span class="btn">查看更多></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
// 导入 模块 关于各个模块解释在最下面
import SwiperCore, { EffectCoverflow, Navigation, Pagination, A11y, Autoplay } from 'swiper/core'
import { reactive } from 'vue'
import { requirePath } from '@/utils/index.js'

// 注册使用
SwiperCore.use([EffectCoverflow, Navigation, Pagination, A11y, Autoplay])

// 定义轮播图分页
const swiperOption = reactive({
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
</script>
<style lang="scss" scoped>
@import '@/assets/style/variable';

@mixin text-overflow($num: 1) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $num;
  overflow: hidden;
  text-overflow: ellipsis;
}

.swiper-item {
  height: 600px;
}
.max-1700 {
  max-width: 1700px;
  margin: 50px auto;
}
.warp-title {
  color: $bg-color;
  position: relative;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .line {
    width: 60px;
    height: 2px;
    background-color: $bg-color;
    margin-top: 10px;
  }
}
.main-container {
  .about {
    background-image: url('@/assets/home/company_bg_01.jpg');
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100%;
    padding: 50px 0;
    .about-content {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      .about-left {
        font-size: 14px;
        color: #999999;
        margin-right: 50px;
        padding-top: 60px;
        p:nth-of-type(1) {
          font-size: 24px;
          color: #333333;
          padding-bottom: 30px;
        }
        p:nth-of-type(2) {
          line-height: 26px;
        }
        .btn {
          background-color: $bg-color;
          color: #ffffff;
          display: inline-block;
          padding: 10px 30px;
          margin-top: 30px;
          cursor: pointer;
        }
      }
      .about-right {
      }
    }
  }
  .culture {
    background-image: url('@/assets/home/index-product-bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-bottom: 0;
    .culture-list {
      padding: 50px 0;
      & > li {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;

        .circle {
          width: 160px;
          height: 160px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          font-size: 40px;
          font-family: 'FangSong';
          transition: all 0.35s ease-in-out;
          background: url('@/assets/home/circle-red.png') no-repeat;
          background-size: 100% 100%;
          &:hover {
            transform: scale(1.1);
          }
        }
        .cul-border {
          width: 120px;
          height: 1px;
          background-color: #9b6526;
          margin: 0 60px;
        }
        .tit {
          color: $bg-color;
          font-size: 14px;
          p:nth-of-type(1) {
            font-size: 20px;
          }
        }
      }
    }
  }
  .business {
    background-image: url('@/assets/home/index_business_bg.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: 0;
    padding: 50px 0;
    .business-list {
      display: flex;
      & > li {
        box-sizing: border-box;
        background: url('@/assets/home/index_service_bg.png') no-repeat;
        background-size: 100% 100%;
        height: 520px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 60px 60px 55px;
        &:last-of-type {
          margin-right: 0;
        }
        &:hover .tit {
          color: $bg-color;
        }
        .tit {
          flex: 1;
          color: #666666;
          font-size: 14px;
          & > p:nth-of-type(1) {
            font-size: 24px;
          }
          & > p:nth-of-type(2) {
            line-height: 26px;
            padding-top: 30px;
            @include text-overflow(5);
          }
        }
      }
    }
    .btn-box {
      text-align: center;
      .btn {
        background-color: $bg-color;
        color: #ffffff;
        display: inline-block;
        padding: 10px 30px;
        margin-top: 30px;
        cursor: pointer;
      }
    }
  }
  .storeInfo {
    .store-list {
      display: flex;
      padding: 50px 0;
      & > li {
        margin-right: 100px;
        box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
        &:last-of-type {
          margin-right: 0;
        }
        &:hover {
          transform: scale(1.1);
        }
        .tit {
          padding: 20px;
          font-size: 14px;
          color: #414141;
          & > p:nth-of-type(1) {
            font-size: 18px;
            padding-bottom: 10px;
          }
        }
      }
    }
    .btn-box {
      text-align: center;
      .btn {
        background-color: $bg-color;
        color: #ffffff;
        display: inline-block;
        padding: 10px 30px;
        margin-top: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>
