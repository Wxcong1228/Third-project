// // pages/login/login.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },
//   login(evt){ wx.getUserProfile({ desc: 'desc', //desc不可删除
//    success:res=>{  console.log(res); //成功回调 
//     if(res.userInfo){ wx.login({ success:ret=>{ console.log(ret); 
//       var code = ret.code 
//       wx.request({ url: 'http://www.tp6.com/api/login/login', //仅为示例，并非真实的接口地址 
//       data:{ code:code }, method:"POST", header: { 'content-type': 'application/json' }, 
//       success (res) { console.log(res.data.data) 
//         wx.setStorageSync('token', res.data.data.token); 
//         wx.setStorageSync('openid', res.data.data.openid); 
//         wx.setStorageSync('session_key', res.data.data.session_key); 
//         wx.navigateTo({ url: '/pages/edit/edit', }) } }) } }) } } }) },
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad(options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady() {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow() {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide() {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload() {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh() {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom() {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage() {

//   }
// })
Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              console.log('aaaa',res.userInfo)
              // 用户已经授权过,调用微信的 wx.login 接口，从而获取code,再直接跳转到主页
              wx.login({
                success: res => {
                  // 获取到用户的 code 之后：res.code
                  console.log("用户的code:" + res.code);
                }
              });
              wx.switchTab({
                url: '/pages/home/home',    //这里填入要跳转目的页面的url
                success: (result) => {
                  console.log("跳转到首页");
                },
                fail: () => {}
              });
            }
          });
        } else {
          // 用户没有授权，显示授权页面,这里不进行操作
        }
      }
    });
  },

  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      //授权成功后,跳转页面
      wx.switchTab({
        url: '/pages/home/home',    //这里填入要跳转目的页面的url
        success: (result) => {
          console.log("跳转到首页");
        },
        fail: () => {}
      });
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您拒绝了授权，将无法进入小程序，请授权之后再进入!',
        showCancel: false,
        confirmText: '返回',
        success: function (res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回”');
          }
        }
      });
    }
  }
})