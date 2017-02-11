## Memos

> 技术架构：本备忘录使用react+react-router+redux+less+ES6+webpack实现;

>页面UI参照：[TodoList官网](http://www.todolist.cn/)实现;

> 在线演示地址：[Damonare的备忘录](http://damonare.cn/memos);

### 功能说明

- 支持回车添加新事项;
- 支持删除事项(点击X符号);
- 支持状态转换具体包括：
  - 新建事项->正在进行(点击checkbox选项)
  - 正在进行->已完成(点击文字内容本身)
  - 正在进行->新建事项(点击checkbox选项)
  - 已完成->正在进行(点击文字本身)
- 支持判断输入空字符，过长字符(20个汉字以内);
- 支持搜索;
- 支持本地化存储;
- 支持状态的展开隐藏(点击标题)
- 兼容手机端(iPhone6及以上)
- 支持路由切换

### 待解决

- 搜索存在bug,搜索结果出现后进行操作会清空本地数据
- 添加`路由`，按事项状态分子页面展示;Done
- `全部事项`添加的位置;Done

### 本地演示方法

```text
# 安装依赖
npm install
# 本地运行
npm run start
# 运行地址
localhost:8080
```

### 相关截图

**PC端页面:**

![PC端页面](http://7xsssj.com2.z0.glb.qiniucdn.com/PC%E7%AB%AF%E5%A4%87%E5%BF%98%E5%BD%95%E9%A1%B5%E9%9D%A2.png)

**移动端页面:**

![移动端端页面](http://7xsssj.com2.z0.glb.qiniucdn.com/%E6%89%8B%E6%9C%BA%E7%AB%AF%E5%A4%87%E5%BF%98%E5%BD%95%E9%A1%B5%E9%9D%A2.png)
