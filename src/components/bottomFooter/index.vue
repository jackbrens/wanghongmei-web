<template>
  <footer class="footer">
    <div class="container wrapper">
      <div class="menu-box">
        <p class="head-title">网站导航·MENU</p>
        <div class="line"></div>
        <ul>
          <li
            class="menu-item"
            v-for="(li, i) in menuList"
            :key="i"
            @click="handleOnMenu(li.routerName)"
          >
            {{ li.label }}
          </li>
        </ul>
      </div>
      <div class="contact-box">
        <p class="head-title">联系方式·CONTACT</p>
        <div class="line"></div>
        <div class="phone">
          <span>联系电话：400-8876516</span>
          <span>邮箱：13956156908@126.com</span>
        </div>
        <div class="address">地址：安徽省芜湖市黄山东路新华文沁苑1栋5单元4层</div>
      </div>
      <div class="contact-pic">
        <img :src="requirePath('contact.png')" alt="" />
      </div>
    </div>
  </footer>
</template>
<script setup>
import { requirePath } from '@/utils/index.js'
import { useRouter } from 'vue-router'
const router = useRouter()

const menuList = [
  {
    label: '网站首页',
    routerName: 'home'
  },
  {
    label: '公司介绍',
    routerName: 'about'
  },
  {
    label: '品牌文化',
    routerName: 'brandCulture'
  },
  {
    label: '新闻中心',
    routerName: 'news'
  },
  {
    label: '业务模块',
    routerName: 'businessSegments'
  },
  {
    label: '门店信息',
    routerName: 'storeInfo'
  },
  {
    label: '联系我们',
    routerName: 'contact'
  }
]
const handleOnMenu = (routerName) => {
  router.push({ name: routerName })
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/variable';
.footer {
  margin-top: 100px;
  padding: 60px 0;
  background-color: #59413d;
  color: #999999;
  .container {
    display: flex;
    justify-content: space-between;
    @include media($breakpoint-md) {
      flex-direction: column-reverse;
      align-items: center;
    }
    .menu-box {
      @include media($breakpoint-md) {
        display: none;
      }
    }
    .contact-box {
      @include media($breakpoint-md) {
        margin-top: 30px;
        padding: 0 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .phone {
        margin-bottom: 20px;
        @include media($breakpoint-md) {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        span:nth-of-type(1) {
          margin-right: 30px;
        }
      }
    }
    .contact-pic {
      width: 200px;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.line {
  background-color: #ffffff3d;
  height: 1px;
  width: 70%;
  margin: 20px 0;
}
.head-title {
  color: #fff;
  font-weight: 500;
  font-size: 24px;
}
.menu-item {
  display: inline-block;
  padding-right: 5%;
  padding-bottom: 5%;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
}
</style>
