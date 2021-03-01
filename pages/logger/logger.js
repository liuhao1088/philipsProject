var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img10.360buyimg.com/ddimg/jfs/t1/140008/28/11335/121374/603c50e1E27f40a0a/b2e7cfe80518595b.jpg',
      top:'',
      urlList:[
        'https://img11.360buyimg.com/ddimg/jfs/t1/169260/8/8445/368327/603c50fcE52f88b02/d922397b22163c55.png'
      ]
    }
  },
  toProduct(e){
    // let index = e.currentTarget.dataset.index;
    // console.log(index)
    wx.navigateTo({
      url: '../loggerDetails/loggerDetails',
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