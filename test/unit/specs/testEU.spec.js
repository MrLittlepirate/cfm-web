import Vue from 'vue'
import TestEU from '@/components/testEU.vue'

// 引入ElementUI
import ElementUI from 'element-ui'
console.log('before use。。。。。。。')
Vue.use(ElementUI)
console.log('after use。。。。。。。')
// 测试套件 test suite
describe.only('测试test.vue', () => {
  // test cases
  it('测试界面元素存在', () => {
  })
})
