// pages/myOrder/myOrder.js
const{getDetail} = require('../../apis/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order:[],
    counts:'',
    price: 0.01
  },
  delGoods: function (e) {
    this.data.order.splice(e.currentTarget.dataset.index, 1);
   
    this.setData({
      order: this.data.order
    })
    console.log(this.data.order);
    // Toast("删除成功")
    // if (this.data.order.length >= 0) {
    //   this.setData({
    //     order: this.data.order
    //   })
      wx.setStorageSync('order', this.data.order);
    // } else {
    //   this.setData({
    //     order: this.data.order,
    //     iscart: false,
    //     hidden: true,
    //   })
      // wx.setStorageSync('order', []);
    // }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var order1 = wx.getStorageSync('order')
    var order2 = []
    var sum = []
    console.log('a',order1);
    order1.forEach(item => {
      sum.push(item.count1)
      this.setData({
        counts: sum
      })
      getDetail(item.ID).then(res => {
        console.log('a',res);
        order2.push(res.data.data)
        console.log('asd',order2);
        this.setData({
          order: order2
        })
        console.log('aaa',this.data.order);
      })
      
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})