//index.js
//获取应用实例
const app = getApp()
const datas = [{ "code": "000001000001000001000001000001", "date": "2018-01-02", "name": "临时草稿1", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "000002", "date": "2018-01-02", "name": "临时草稿2", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "000003", "date": "2018-01-02", "name": "临时草稿3", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "000004", "date": "2018-01-02", "name": "临时草稿4", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "000005", "date": "2018-01-02", "name": "临时草稿5", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "000006", "date": "2018-01-02", "name": "临时草稿6", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "000007", "date": "2018-01-02", "name": "临时草稿7", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "000008", "date": "2018-01-02", "name": "临时草稿8", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "000009", "date": "2018-01-02", "name": "临时草稿9", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000010", "date": "2018-01-02", "name": "临时草稿11", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000011", "date": "2018-01-02", "name": "临时草稿23", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000012", "date": "2018-01-02", "name": "临时草稿412", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000013", "date": "2018-01-02", "name": "临时草稿415", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000014", "date": "2018-01-02", "name": "临时草稿532", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000015", "date": "2018-01-02", "name": "临时草稿53", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000016", "date": "2018-01-02", "name": "临时草稿32", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000017", "date": "2018-01-02", "name": "临时草稿24", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000018", "date": "2018-01-02", "name": "临时草56稿", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000019", "date": "2018-01-02", "name": "临时草稿43", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000020", "date": "2018-01-02", "name": "临时草稿322", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "000001000001000001000001000001", "date": "2018-01-02", "name": "临时草稿1", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "000002", "date": "2018-01-02", "name": "临时草稿2", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "000003", "date": "2018-01-02", "name": "临时草稿3", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "000004", "date": "2018-01-02", "name": "临时草稿4", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "000005", "date": "2018-01-02", "name": "临时草稿5", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "000006", "date": "2018-01-02", "name": "临时草稿6", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "000007", "date": "2018-01-02", "name": "临时草稿7", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "000008", "date": "2018-01-02", "name": "临时草稿8", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "000009", "date": "2018-01-02", "name": "临时草稿9", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000010", "date": "2018-01-02", "name": "临时草稿11", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000011", "date": "2018-01-02", "name": "临时草稿23", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000012", "date": "2018-01-02", "name": "临时草稿412", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000013", "date": "2018-01-02", "name": "临时草稿415", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000014", "date": "2018-01-02", "name": "临时草稿532", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000015", "date": "2018-01-02", "name": "临时草稿53", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000016", "date": "2018-01-02", "name": "临时草稿32", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000017", "date": "2018-01-02", "name": "临时草稿24", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000018", "date": "2018-01-02", "name": "临时草56稿", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000019", "date": "2018-01-02", "name": "临时草稿43", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }, { "code": "0000020", "date": "2018-01-02", "name": "临时草稿322", "age": "180980", "pno": "DK-20201", "pname": "心脏支架", "specification": "20*20cm", "lotno": "20180102", "qty": "10" }]
// const watch = require("observe.js");
Page({
  
  data: {
    maxWidth:130,
    headTitles: ["单号", "日期", "状态", "序列号", "货号", "品名", "规格", "批号", "数量"],
    modelProperties: ["code", "date", "name", "age", "pno", "pname", "specification", "lotno", "qty"],
    bodyDatas: datas,
    viewHeight:400,
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  
  onLoad: function () {
    
    // watch.setWatcher(this); // 设置监听器，建议在onLoad下调用
    // this.setData({ bodyDatas: [] })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  
})
