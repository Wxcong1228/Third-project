// pages/productDetail/productDetail.js
const{getDetail} = require('../../apis/api')
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false,
    arr: [],
    isClick: false,
    active: 0,
    arr1:[],
    length:''
  },
  throttle() {
    if (this.data.isClick) {
      this.setData({
        isClick: false
      });
      setTimeout(() => {
        this.setData({
          isClick: true
        })
      }, 600);
    } else {
      return;
    }
  },
  addCart(e) {
    var goods = this.data.arr;
    goods.isSelect = false;
    var count = this.data.num;
    var title = this.data.arr.name;
   
    if (title.length > 10) {
      goods.title = title.substring(0, 10) + '...';
    }
    var arr = wx.getStorageSync('cart') || [];
    console.log("cart_arr,{} : ", arr);
    Toast("已加入购物车")
    this.setData({
      arr1: arr,
      length: this.data.length +1
    })
    if (arr.length > 0) {
      for (var j in arr) {
        if (arr[j].id == this.data.arr.id) {
          arr[j].count = arr[j].count + count;
          try {
            wx.setStorageSync('cart', arr)
          } catch (e) {
            console.log(e)
          }
          return;
        }
      }
      arr.push(goods);
      arr[arr.length - 1].count = count;
    }else{
      arr.push(goods);
      arr[0].count = count;
    }
    try {
      wx.setStorageSync('cart', arr);      
    } catch (e) {      
        console.log(e)
    }
  },

  addToCart() {
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;
    this.throttle()
    self.setData({
      show: true
    })
    setTimeout(function () {
      self.setData({
        show: false,
        scaleCart: true
      })
      setTimeout(function () {
        self.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total
        })
      }, 200)
    }, 300)
    this.addCart();
  },
  toChilk(){
    var arr = wx.getStorageSync('cart') || [];
    console.log(1111);
      console.log("arr,{}", arr);
      this.setData({
        arr1: arr
      })
  },
  onLoad(options) {
    const that = this
    let id = options.id
    
    getDetail(id).then(res => {
      console.log(res);
      that.setData({
        arr: res.data.data,
        isClick: true
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
    var arr = wx.getStorageSync('cart') || [];
    console.log("cart_arr,{} : ", arr);
    var length1 = arr.length
    this.setData({
      arr1: arr,
      length: length1
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