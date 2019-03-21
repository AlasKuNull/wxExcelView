// component/excelView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    headTitles: { // 表头
      type: Array
    },
    modelProperties: { // model 属性
      type: Array
    },
    bodyDatas: { // 内容
      type: Array,
      observer: function(newval, oldval) {
        // console.log(this.properties)
        this.caculateMaxWidths(this.properties.bodyDatas);
        this.setData({
          bodyDatas: this.properties.bodyDatas
        })
      }
    },
    headBackgroundColor: { // 表头背景色
      type: String,
      value:'red',
    },
    bodyBackgroundColor: { // 内容背景色
      type: String,
      value:'lightgray',
    },
    evenLineColor:{ // 偶数行的背景色
      type:String,
      value:'white',
    },
    headtextColor: { // 表头文字颜色
      type: String,
      value:'black',
    },
    bodyTextColor: { // 内容文字颜色
      type: String,
      value:'black'
    },
    headLineHeight: { // 表头高度
      type: Number,
      value: 30,
    },
    bodyLineHeight: { // 内容高度
      type: Number,
      value: 40,
    },
    maxColumWidth: { // 列最大宽度
      type: Number,
      value: 150,
    },
    minColumWidth: { // 列最小宽度
      type: Number,
      value: 50,
    },
    viewHeight: {
      type: Number,
      value: 200,
    },
    contentMargin: {
      type:Number,
      value:5,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scrollX: 0,
    scrollY: 0,
    windowHeight: 0,
    windowWidth: 0,
    // headTitles: [],
    contentProperties: [],
    // bodyDatas: [],
    columnMaxWidthDict: {},
    columnMaxWidths: [],

  },

  /**
   * 组件的方法列表
   */
  methods: {
    didSelectColumn: function() {

    },
    // 计算所有列宽
    caculateMaxWidths: function(data) {
      // console.log(data.length);
      // 如果为空则直接返回
      if (data.length == 0) {
        return [];
      }
      // console.log(this.data.modelProperties);
      var colMaxWidthsArray = [];
      var colMaxWidthsDict = {};
      for (var col = 0; col < this.data.modelProperties.length; col++) { // 遍历列
        var maxWidth = this.properties.minColumWidth;
        var currentPro = this.data.modelProperties[col];
        // console.log(currentPro);

        for (var row = 0; row < data.length; row++) { // 遍历行
          // console.log('datarow: ' + data[row]);

          var colText = data[row][currentPro];
          // console.log('colText: ' + colText);

          var currentWidth = this.getTextWidth(colText);
          if (currentWidth > maxWidth) {
            maxWidth = currentWidth;
          }
          if (maxWidth > this.properties.maxColumWidth) {
            maxWidth = this.properties.maxColumWidth;
          }
        }
        if (maxWidth < this.properties.maxColumWidth) {
          maxWidth = maxWidth + this.properties.contentMargin;
        }
        // console.log(this.properties.maxColumWidth);
        colMaxWidthsDict[currentPro] = maxWidth;
        colMaxWidthsArray.push(maxWidth);
      }
      // console.log(colMaxWidthsArray);
      this.setData({
        columnMaxWidthDict: colMaxWidthsDict,
        columnMaxWidths: colMaxWidthsArray,
        bodyDatas: data
      })
    },
    didClickSection: function(e) {
      // console.log(e);
      console.log(e.currentTarget.dataset['section']);
      console.log(e.currentTarget.dataset['item']);
    },

    getBLen: function(str) {
      if (str == null) return 0;
      if (typeof str != "string") {
        str += "";
      }
      return str.replace(/[^\x00-\xff]/g, "ab").length;
    },
    getTextWidth: function(text) {
      var len = this.getBLen(text);
      // console.log(text, len, len * 13);
      return 8 * this.getBLen(text);
    },

    scrollXAxi: function(e) {
      this.setData({
        scrollX: e.detail.scrollLeft,
      })
    },
    scrollYAxi: function(e) {
      this.setData({
        scrollY: e.detail.scrollTop
      })
    },
    // 监听滚动时间
    scroll: function(e) {
      // console.log(e)
      this.setData({
        scrollX: e.detail.scrollLeft,
        scrollY: e.detail.scrollTop
      })
    },
  },

  // 生命周期
  lifetimes: {
    attached() {
      var mythis = this;
      wx.getSystemInfo({
        success: function(res) {
          // console.log(res);
          // 屏幕宽度、高度
          // console.log('height=' + res.windowHeight);
          // console.log('width=' + res.windowWidth);
          // 高度,宽度 单位为px
          mythis.setData({
            windowHeight: res.windowHeight,
            windowWidth: res.windowWidth
          })
        }
      })
      // 在组件实例进入页面节点树时执行
    },
  },
})