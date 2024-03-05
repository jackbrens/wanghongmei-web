export const requirePath = (imgPath) => {
  try {
    return new URL(`../assets/${imgPath}`, import.meta.url).href
  } catch (error) {
    console.warn(error)
  }
}

export const menuList = [
  {
    label: '首页',
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
  }
]
