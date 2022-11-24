// pages/message/message.js
var addressList = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    latitude: '',
    longitude: '',
    address: ''
  },
  Value(e) {
    var value = e.detail.value
    this.setData({
      value1: value
    })
  },
  Value1(e) {
    var value = e.detail.value
    this.setData({
      value2: value
    })
  },
  Value2(e) {
    var value = this.data.address
    this.setData({
      value3: value
    })
  },

  Value5(e) {
    var value = e.detail.value
    this.setData({
      value6: value
    })
  },

  submit: function () {
    var arr = wx.getStorageSync('addressList') || [];
    console.log(1111);
    console.log("arr", arr);

    addressList = {

      consignee: this.data.value1,

      mobile: this.data.value2,

      address: this.data.address + this.data.value6,

    }

    arr.push(addressList);

    wx.setStorageSync('addressList', arr);

    wx.navigateBack({
      delta: 1
    })
  },
  moveToLocation: function () {
    let {
      latitude,
      longitude
    } = this.data;
    wx.chooseLocation({
      latitude,
      longitude,
      success: (res) => {
        console.log(res);
        this.setData({
          name: res.name,
          address: res.address,
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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