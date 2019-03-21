# wxExcelView
微信小程序  excel  表格 

![示例](https://github.com/AlasKuNull/wxExcelView/blob/master/10.gif)

# 属性
```
headTitles // 表头
modelProperties // model 属性
bodyDatas  // 内容
widthSetting  // 指定列宽    
headBackgroundColor  // 表头背景色
bodyBackgroundColor // 内容背景色
evenLineColor // 偶数行的背景色
headtextColor // 表头文字颜色
bodyTextColor // 内容文字颜色
headLineHeight // 表头高度
bodyLineHeight  // 内容高度
maxColumWidth  // 列最大宽度
minColumWidth // 列最小宽度
viewHeight   // 组件高度
contentMargin // 内容间隙
```
# 方法(Method)
```
   // 点击事件
didClickSection: function (e) {
console.log(e.currentTarget.dataset['section']); // 点击的行
console.log(e.currentTarget.dataset['item']); // 点击的列名
},

```

# About
一个小程序新手
请多多关照~
