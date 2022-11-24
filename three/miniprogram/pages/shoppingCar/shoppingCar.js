// pages/shoppingCar/shoppingCar.js
import Toast from '@vant/weapp/toast/toast';
var buy = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [], 
    iscart: false,
    hidden: null,
    isAllSelect: false,
    totalMoney: 0.00,
    order_id: 0,
    active: 0,
    active1:false,
    isSelect1:false,
    gwnum: 1,
    isSelect: false,
    buy:[]
  },
 

allSelect: function (e) {
  let i = 0;
  if (!this.data.isAllSelect) {
    this.data.totalMoney = 0;
    for (i = 0; i < this.data.carts.length; i++) {
      this.data.carts[i].isSelect = true;
      this.data.totalMoney = this.data.totalMoney + (this.data.carts[i].price * this.data.carts[i].count);
    }
  } else {
    for (i = 0; i < this.data.carts.length; i++) {
      this.data.carts[i].isSelect = false;
    }
    this.data.totalMoney = 0;
  }
  this.setData({
    carts: this.data.carts,
    isAllSelect: !this.data.isAllSelect,
    totalMoney: this.data.totalMoney,
  })
},


delGoods: function (e) {
  this.data.carts.splice(e.currentTarget.dataset.index, 1);
  Toast("删除成功")
  if (this.data.carts.length >= 0) {
    this.setData({
      carts: this.data.carts
    })
    wx.setStorageSync('cart', this.data.carts);
  } else {
    this.setData({
      cart: this.data.carts,
      iscart: false,
      hidden: true,
    })
    wx.setStorageSync('cart', []);
  }
},
switchSelect: function (e) {
    i = 0;
  let index = e.target.dataset.index;
  console.log('i',index);
  this.data.carts[index].isSelect = !this.data.carts[index].isSelect;
  if (this.data.carts[index].isSelect) {
    this.data.totalMoney = this.data.totalMoney + parseFloat(this.data.carts[index].price * this.data.carts[index].count);
  }else {
    this.data.totalMoney = this.data.totalMoney - parseFloat(this.data.carts[index].price * this.data.carts[index].count);
  }
  var sum =  0
  for(var i = 0 ; i< this.data.carts.length;i++){
    
    if(this.data.carts[i].isSelect === true){
      sum  = sum + 1
      console.log('sum',sum);
    }
    if(sum == this.data.carts.length){
      this.data.isAllSelect === true
      console.log(111);
      this.setData({
        isAllSelect: true,
      })
    }else{
      this.setData({
        isAllSelect: false,
      })
    }
    console.log(this.data.isAllSelect);
    console.log(this.data.carts.length );
  }
  this.setData({
    carts: this.data.carts,
    totalMoney: this.data.totalMoney,
  })
  
},

priceCount: function (e) {
  this.data.totalMoney = 0;
  for (var i = 0; i < this.data.carts.length; i++) {
    if (this.data.carts[i].isSelect == true) {
      this.data.totalMoney = this.data.totalMoney + parseFloat(this.data.carts[i].price * this.data.carts[i].count);
    }
  }
  this.setData({
    totalMoney: this.data.totalMoney,
  })
},
goBuy: function (e) {
  var newProducts = [];
  this.data.carts.forEach(item => {
    if (item.isSelect == true) {
      newProducts.push({
        product_id: item.id,
        count: item.count,
        url: item.main_img_url,
        price: item.price,
        totalMoney:this.data.totalMoney,
        name:item.name
      })
      wx.setStorageSync('buy', newProducts);
      console.log('wed',newProducts);
    }
    if(this.data.isAllSelect == true){
      this.setData({
        carts: []
      })
    }
    console.log('aa',this.data.carts);
      for(var i=0;i<newProducts.length;i++){
        // var index = this.data.carts.indexOf(newProducts[i].product_id);
        //  this.data.carts.splice(index, 1);
         console.log('[]',newProducts);
       this.data.carts.forEach((item1,index) => {
         if(item1.id == newProducts[i].product_id){
          this.data.carts.splice(index, 1);
          console.log('[',index);
         }
       })
      }
  })
  console.log(newProducts);
  if (this.data.carts.length > 0) {
    this.setData({
      carts: this.data.carts
    })
    wx.setStorageSync('cart', this.data.carts);
    this.priceCount();
  } else {
    this.setData({
      cart: this.data.carts,
      iscart: false,
      hidden: true,
    })
    wx.setStorageSync('cart', []);
  }

},
// gobuy:function(e){
//   var buy1 = wx.getStorageSync('buy')
//   console.log('f',buy1);
// for(var i=0;i<this.data.carts.length;i++){
 
//   if(this.data.carts[i].isSelect == true && buy1.indexOf(this.data.carts[i]) == -1){
//   buy={
//     id: this.data.carts[i].id,
//     name: this.data.carts[i].name,
//     price: this.data.carts[i].price,
//     url: this.data.carts[i].main_img_url,
//     totalMoney: this.data.totalMoney,
//     count: this.data.carts[i].count
//   }
//   buy1.push(buy)
//   wx.setStorageSync('buy', buy1)
//     console.log('56',buy1);
//   }else {
//     wx.setStorageSync('buy', []);
//   }
// }
// },
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
    var arr = wx.getStorageSync('cart') || [];
    console.log(arr);
    if (arr.length > 0) {
      this.
      setData({
        carts: arr,
        iscart: true,
        hidden: false
      });
    } else {
      this.setData({
        iscart: false,
        hidden: true,
      });
    }
  },

  addCount: function (e) {
    let index = e.target.dataset.index;
    console.log(this.data.carts);
    let count = this.data.carts[index].count; 
    console.log(count);
    if (count < 100) {
      this.data.carts[index].count++;
    }
    this.setData({
      carts: this.data.carts
    });
    this.priceCount();
  },
  UnaddCount: function (e) {
    let index = e.target.dataset.index;
    let count = this.data.carts[index].count;
    if (count >1) {
      this.data.carts[index].count--;
    }else{
      Toast("宝贝数量不能再减少了")
    }
    this.setData({
      carts: this.data.carts
    });
    this.priceCount();
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