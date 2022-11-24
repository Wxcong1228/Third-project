// pages/classification/classification.js
const {
  getClass,getClassDetail
}=require('../../apis/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArr:[
      {id:2,name: "水果"},
      {id:3,name: "茶叶"},
      {id:4,name: "糕点"},
      {id:5,name: "下酒"},
      {id:6,name: "豆类"},
      {id:7,name: "蔬菜"},
    ],
    curIndex: 0,
    productArr:[],
    banner: [],
   loading:true
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    // let productArr = []
    // let banner;
    const that = this
    var productArr = [];
    let banner;
    getClass().then(res => {
      banner = res.data.data
      console.log(banner)
      for (var i = 0; i < banner.length; i++) {
        getClassDetail(banner[i].id).then(res => {
          console.log('a',res);
          productArr.push(res.data.data)
          console.log('1',productArr)
          that.setData({
            banner,
            productArr,
            loading:false
          })
        })
        
        console.log(banner);
      }
    })
    
  },

switchTab(e){
    const self = this;
  this.setData({
    isScroll: true
  });
  setTimeout(function(){
    self.setData({
      toView: 's' + e.target.dataset.id,
      curIndex: e.target.dataset.index
    })
  });
  setTimeout(function(){
    self.setData({
      isScroll: false
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