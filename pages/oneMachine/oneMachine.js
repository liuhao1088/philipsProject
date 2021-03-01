var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img11.360buyimg.com/ddimg/jfs/t1/162412/6/8513/369237/603c52adEfa1fe908/e0b32783cc3c0ea9.jpg',
      top:'',
      urlList:[
        'https://img11.360buyimg.com/ddimg/jfs/t1/164583/16/8537/314304/603c52c2Ec3846783/a9ec54b58528c4cf.png'
      ]
    }
  },

  toProduct(e){
    // let index = e.currentTarget.dataset.index;
    // console.log(index)
    wx.navigateTo({
      url: '../panoramaDetails/panoramaDetails',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let height = app.globalData.height;
    let top = 'item.top';
    console.log(height);
    if(height<800){
      this.setData({
        [top]:'60%'
      })
    }else{
      this.setData({
        [top]:'49%'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})