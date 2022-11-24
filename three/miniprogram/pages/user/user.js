// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList:[],
    userIcon:''
  },
afterRead(event) {
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: '', // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: 'file',
      formData: { user: 'test' },
      success(res) {
        // 上传完成需要更新 fileList
        const { fileList = [] } = this.data;
        fileList.push({ ...file, url: res.data });
        this.setData({ fileList });
      },
    });
  },

    onSelectImage(){
      wx.chooseMedia({
        count: 1,
        mediaType: ['image'],
        sourceType: ['album'],
        camera: 'back',
        success: async (res) => {
          console.log(res);
        await wx.cloud.deleteFile({
            fileList: [this.data.userIcon],
            success: res => {
              // handle success
              console.log(res.fileList)
            },
            fail: console.error
          })
          wx.cloud.uploadFile({
            // 指定上传到的云路径
            cloudPath: res.tempFiles[0].size + '.png',
            // 指定要上传的文件的小程序临时文件路径
            filePath: res.tempFiles[0].tempFilePath,
            // 成功回调
            success: res => {
              this.setData({
                userIcon: res.fileID
              })
              console.log('上传成功', res)
            },
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