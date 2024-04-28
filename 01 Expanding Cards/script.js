// 获取.panel 元素
// querySelectorAll() 方法返回与 CSS 选择器匹配的所有元素 返回数组
const panels = document.querySelectorAll('.panel')
// 给每个panel元素 绑定点击事件 （遍历）
panels.forEach((panel)=>{
  panel.addEventListener('click',()=>{
    //取消之前绑定的active
    panels.forEach((panel)=>{
      panel.classList.remove('active')
    })
    //给点击元素绑定active
    panel.classList.add('active')
  })
})