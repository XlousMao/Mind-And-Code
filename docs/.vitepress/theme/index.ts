import DefaultTheme from 'vitepress/theme'
import './style/custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 可以在这里注册全局组件
  },
  setup() {
    // 添加阅读进度条
    const addProgressBar = () => {
      // 创建进度条容器
      const progressContainer = document.createElement('div')
      progressContainer.className = 'progress-container'
      
      // 创建进度条
      const progressBar = document.createElement('div')
      progressBar.className = 'progress-bar'
      
      progressContainer.appendChild(progressBar)
      document.body.appendChild(progressContainer)
      
      // 更新进度条函数
      const updateProgressBar = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (winScroll / height) * 100
        progressBar.style.width = scrolled + '%'
      }
      
      // 添加滚动事件监听
      window.addEventListener('scroll', updateProgressBar)
    }
    
    // 页面加载完成后添加进度条
    if (typeof window !== 'undefined') {
      window.addEventListener('load', addProgressBar)
    }
    
    // 添加鼠标跟随光效到卡片
    const addCardMouseEffect = () => {
      const cards = document.querySelectorAll('.vp-card, .home-card')
      
      cards.forEach(card => {
        // 为每个卡片创建鼠标跟随元素
        const follower = document.createElement('div')
        follower.className = 'mouse-follower'
        card.style.position = 'relative'
        card.appendChild(follower)
        
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          
          follower.style.left = x + 'px'
          follower.style.top = y + 'px'
        })
      })
    }
    
    // 页面加载完成后添加卡片鼠标效果
    if (typeof window !== 'undefined') {
      window.addEventListener('load', addCardMouseEffect)
    }
  }
}
