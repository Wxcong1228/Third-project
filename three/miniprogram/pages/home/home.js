// pages/home/home.js
const {
  getBanner,getThemeInfo,getItems
}=require('../../apis/api.js');

const app = getApp()

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    id: 1,
    CurrentIndex:"",
    items:[{
      key_word: "6",
      type: 1,
      img: {
        name: "",
        url: "/images/banner-4a.png",
      }
    }],
    imgArr1:[],
    imgArr2:[],
    imgArr3:[],
    productArr:[],
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(){
    const that = this;
    getBanner().then(res => {
      console.log(res)
      that.setData({
        items:res.data.data.items,
        loading: false
      })
    }),

    getThemeInfo(1).then(res => {
      console.log(res);
      that.setData({
        imgArr1:res.data.data
      })
    }),
    getThemeInfo(2).then(res => {
      console.log(res);
      that.setData({
        imgArr2:res.data.data
      })
    }),
    getThemeInfo(3).then(res => {
      console.log(res);
      that.setData({
        imgArr3:res.data.data
      })
    }),

    getItems().then(res => {
      console.log('aa',res);
      that.setData({
        productArr:res.data.data
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