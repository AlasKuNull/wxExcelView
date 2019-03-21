Component({
  properties: {
    index:{
      type:Number,
      value:0
    },
    count:{
      type:Number,
      value:0,
      observer: function (newval, oldval) {
        this.setData({
          count: this.properties.count
        })
      }
    }
  },
  data:{
    count:0
  },
  methods: {
    /* 点击减号 */
    bindMinus: function () {
      var num = this.data.count;
      // 如果大于1时，才可以减  
      if (num > 1) {
        num--;
      }
      // 将数值与状态写回  
      this.setData({
        count: num,
      });
      this.triggerEvent('myEvent', { index: this.properties.index,count:num });
    },
    /* 点击加号 */
    bindPlus: function () {
      var num = this.data.count;
      // 不作过多考虑自增1  
      num++;
      // 只有大于一件的时候，才能normal状态，否则disable状态  
      // 将数值与状态写回  
      this.setData({
        count: num,
      });
      this.triggerEvent('myEvent', { index: this.properties.index, count: num });

    },
    /* 输入框事件 */
    bindManual: function (e) {
      var num = e.detail.value;
      // 将数值与状态写回  
      this.setData({
        count: num
      });
      this.triggerEvent('myEvent', { index: this.properties.index, count: num });

    }  
  },
})
