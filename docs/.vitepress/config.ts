import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 递归扫描目录并生成侧边栏配置
function generateSidebar(dirPath: string, basePath: string = ''): any[] {
  const sidebarItems: any[] = []
  
  // 获取目录下的所有文件和子目录
  const items = fs.readdirSync(dirPath)
  
  // 遍历所有项目
  for (const item of items) {
    const fullPath = path.join(dirPath, item)
    const stats = fs.statSync(fullPath)
    
    if (stats.isDirectory()) {
      // 如果是目录，递归处理
      const subItems = generateSidebar(fullPath, path.join(basePath, item))
      if (subItems.length > 0) {
        sidebarItems.push({
          text: formatCategoryName(item),
          items: subItems
        })
      }
    } else if (stats.isFile() && item.endsWith('.md')) {
      // 如果是 markdown 文件，添加到侧边栏
      const fileName = item.replace('.md', '')
      sidebarItems.push({
        text: formatProblemName(fileName),
        link: path.join(basePath, fileName).replace(/\\/g, '/')
      })
    }
  }
  
  return sidebarItems
}

// 格式化分类名称（如 array -> 数组）
function formatCategoryName(category: string): string {
  const categoryMap: Record<string, string> = {
    'array': '数组',
    'linked-list': '链表',
    'dynamic-programming': '动态规划',
    'string': '字符串',
    'hash-table': '哈希表',
    'tree': '树',
    'graph': '图',
    'binary-search': '二分查找',
    'backtracking': '回溯',
    'sliding-window': '滑动窗口',
    'two-pointers': '双指针'
  }
  return categoryMap[category] || category
}

// 格式化问题名称（如 01-two-sum -> 001.两数之和）
function formatProblemName(fileName: string): string {
  // 匹配数字前缀和问题名称
  const match = fileName.match(/^(\d+)-(.*)$/)
  if (match) {
    const number = match[1].padStart(3, '0')
    const name = match[2].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
    return `${number}.${name}`
  }
  return fileName
}

export default defineConfig({
  title: 'LeetCode Hot100 题解',
  description: 'LeetCode 热门 100 题的详细解析',
  base: '/Mind-And-Code/',
  ignoreDeadLinks: true,
  vite: {
    resolve: {
      alias: {
        '@/solutions/': path.resolve(__dirname, '../../solutions/')
      }
    }
  },
  themeConfig: {
    sidebar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'Hot100',
        items: generateSidebar(path.resolve(__dirname, '../hot100'), '/hot100/')
      }
    ],
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Hot100',
        link: '/hot100/'
      }
    ]
  }
})
