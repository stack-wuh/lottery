组件设计
========

## 底部按钮栏 params:type
1. 从所有带有底部状态栏的页面分离
  1. tabbar  -- 底部导航  type:'tabbar'
  2. button  -- 单独确定按钮  type:'btn'
    1. 文本内容 -- 参数：content
  3. context -- 评论按钮栏 type:'context'
  4. pay -- 付款类 type:'pay'
    1. btn-text -- 按钮
    2. content  -- 内容
  5. order -- 订单类 type:'order'

## 列表分离
1. 顶部时间 -- 底部查看详情
2. 顶部无 -- 底部无
3. 顶部用户详情 -- 底部按钮栏
4. 三列结构 -- 左部 -- 中部 -- 右部

## navbar顶部导航栏分离
1. 个人中心模块 
  1. 关注 type:atten

 
## 详情


## 论坛

## 彩票站

## 专家

## 我的        
 1. 首页 index
 2. 钱包 wallet

## search搜索框


## publish组件
> 分离所有的发表类 
1. 联系客服 params:concat
2. 创建论坛 params:create
3. 发帖子 params: post