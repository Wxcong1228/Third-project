const{getDetail} = require('../../apis/api')
import Toast from '@vant/weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[],
    show: false,
    count:1,
    totalprice: 0.01,
    address:[],
    productArr:[]
  },
  onClickShow() {
    this.setData({ show: true });
  },

  onClickHide() {
    this.setData({ show: false });
  },

  noop() {},

  addCount:function(){
    console.log(15645);
    if(this.data.count < 10){
      console.log(1562);
      let count1 = this.data.count + 1
      let sum = count1 * this.data.arr.price
      console.log(count1);
      this.setData({
        count: count1,
        totalprice: sum
      },() => {
        console.log(this.data.count);
      })
    }else {
      Toast("最多只能购买10件哦~")
    }
  },

  reduceCount:function(){
    console.log(15645);
    if(this.data.count > 1){
      console.log(1562);
      let count1 = this.data.count - 1
      let sum = count1 * this.data.arr.price
      console.log(count1);
      this.setData({
        count: count1,
        totalprice: sum
      },() => {
        console.log(this.data.count);
      })
    }else {
      Toast("不能少于一件哦~")
    }
  },


  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var arr1 = wx.getStorageSync('defultArr') || [];
    var buy1 = wx.getStorageSync('buy')
    console.log('b',buy1);
   
      this.setData({
        address: arr1,
        productArr: buy1
      })
    console.log('112',this.data.productArr);
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
    var arr1 = wx.getStorageSync('defultArr') || [];
    this.setData({
      address: arr1,
    })

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