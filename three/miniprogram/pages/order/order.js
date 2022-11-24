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
    address:[]
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

  goOrder:function(){
   var orderArr = []
    var orderArr = wx.getStorageSync('order') || [];
    if(this.data.arr != ' '){
      // orderArr = []
      var arr1 = this.data.arr
      var count1 = this.data.count
      var ID = arr1.id
      orderArr.push({ID,count1})
      // for(var i = 0; i< this.data.arr.length; i++){
        // orderArr.push({
        //   id:this.data.arr[i].id,
        //   count: this.data.count
        // })
      //   console.log('a',this.data.arr[i].id);
      //   orderArr={
      //     id:this.data.arr[i].id,
      //     count: this.data.count
      //   }
      // }
      // orderArr1.push(orderArr)
    }
    wx.setStorageSync('order', orderArr);
    console.log('order',orderArr);
  },


  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this
    let id = options.id
    var arr1 = wx.getStorageSync('defultArr') || [];
    getDetail(id).then(res => {
      console.log(res);
      that.setData({
        arr: res.data.data,
        address: arr1
      })
      console.log('this',this.data.arr);
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
    var arr1 = wx.getStorageSync('defultArr') || [];
    this.setData({
      address: arr1
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