// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressArr:[]
  },
  del:function(e){
    this.data.addressArr.splice(e.currentTarget.dataset.index, 1);
    this.setData({
      addressArr: this.data.addressArr
    })
    wx.setStorageSync('addressList', this.data.addressArr);
  },

  todetail:function(){
    wx.redirectTo({
      url: '../order/order.js?item={{addressArr[index]}}',
  })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var arr = wx.getStorageSync('addressList') || [];
    console.log(1111);
      console.log("arr,{}", arr);
      this.setData({
        addressArr: arr
      })
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