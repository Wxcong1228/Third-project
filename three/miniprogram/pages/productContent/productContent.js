// pages/productContent/productContent.js
const {
  getThemeInfo
}=require('../../apis/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentArr:[],
    imgUrl:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
    let item1 = options.item
    getThemeInfo(item1).then(res => {
      console.log('555',res);
      that.setData({
        imgUrl: res.data.data.head_img.url,
        contentArr: res.data.data.products
      })
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