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
    widthSetting: {  // 指定列宽
      type: Object
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
    viewHeight: { // 高度
      type: Number,
      value: 200,
    },
    contentMargin: { // 内容间隙
      type:Number,
      value:5,
    },
    showOption: {
      type:Boolean,
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
    contentProperties: [],
    columnMaxWidthDict: {},
    columnMaxWidths: [],
  },
  /**
   * 组件的方法列表
   */
  methods: {
    didClickSection: function (e) {
      // console.log(e);
      var section = e.currentTarget.dataset['section'];
      console.log(section);
      console.log(e.currentTarget.dataset['item']);
      console.log(this.properties.bodyDatas[section]);

    },
    onMyEvent: function (e){
      this.properties.bodyDatas[e.detail.index].qty = e.detail.count;
    },
    // private Method
    // 计算所有列宽
    caculateMaxWidths: function(data) {
      // console.log(data.length);
      // 如果为空则直接返回
      if (data.length == 0) {
        return [];
      }
      var colMaxWidthsArray = [];
      var colMaxWidthsDict = {};
      for (var col = 0; col < this.data.modelProperties.length; col++) { // 遍历列
        var maxWidth = this.properties.minColumWidth;
        var currentPro = this.data.modelProperties[col];
        for (var row = 0; row < data.length; row++) { // 遍历行

          var colText = data[row][currentPro];
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
        if (this.properties.widthSetting != null &&  this.properties.widthSetting[col] > 0) {
          colMaxWidthsDict[currentPro] = this.properties.widthSetting[col];
          colMaxWidthsArray.push(this.properties.widthSetting[col]);
        }else{
          colMaxWidthsDict[currentPro] = maxWidth;
          colMaxWidthsArray.push(maxWidth);
        }
      }
      this.setData({
        columnMaxWidthDict: colMaxWidthsDict,
        columnMaxWidths: colMaxWidthsArray,
        bodyDatas: data
      })
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
          // 高度,宽度 单位为px
          mythis.setData({
            windowHeight: res.windowHeight,
            windowWidth: res.windowWidth
          })
        }
      })
    },
  },
})