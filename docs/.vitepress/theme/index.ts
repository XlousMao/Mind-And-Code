import DefaultTheme from 'vitepress/theme'
import './style/custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 可以在这里注册全局组件
  }
}
