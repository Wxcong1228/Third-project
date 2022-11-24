// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressArr:[],
    active: '',
    defult:[]
  },
  del:function(e){
    const index = e.currentTarget.dataset.index 
    this.data.addressArr.splice(e.currentTarget.dataset.index, 1);
    this.setData({
      addressArr: this.data.addressArr,
      active: index
    })
    wx.setStorageSync('addressList', this.data.addressArr);
    console.log(this.data.active);
  },

  changeActive:function(e){
    var arr = wx.getStorageSync('addressList') || [];
    const index = e.currentTarget.dataset.index
    console.log(index);
    this.data.defult = arr[index]
    this.setData({
      active: index,
      defult: arr[index]
    },()=>{
      console.log('1232',this.data.defult);
    })
    wx.setStorageSync('defultArr', this.data.defult);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var arr = wx.getStorageSync('addressList') || [];
    var arr1 = wx.getStorageSync('defultArr') || [];
    console.log(arr);
    console.log(arr1);
    // if(arr.indexOf(arr1) == -1){
    //   console.log(1234);
    //   this.data.active == arr.indexOf(arr1)
    // }
    
    console.log(1111);
      console.log("arr,{}", arr);
      console.log("arr", arr1);
      this.setData({
        addressArr: arr,
        defult: arr1,
        active: this.data.active
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
    var arr2 = wx.getStorageSync('addressList') || [];
    console.log('561',arr2);
    // if(this.data.addressArr.indexOf(this.data.defult) != -1){
      console.log(123);
      this.setData({
        addressArr: arr2,
        active: this.data.addressArr.indexOf(this.data.defult)
      })
      console.log('df',this.data.active);
      console.log('af',this.data.addressArr);
    // }
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