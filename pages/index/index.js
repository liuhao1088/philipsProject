var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img10.360buyimg.com/ddimg/jfs/t1/161197/27/8128/1014289/603861a6E9a01c853/9bf3e5581b4cde03.jpg',
      top:'',
      urlList:[
        'https://img14.360buyimg.com/ddimg/jfs/t1/165194/35/8271/64652/60389bb7E22b51561/fdf33ca9a472ec69.png',
        'https://img14.360buyimg.com/ddimg/jfs/t1/163615/19/8623/298319/603c5f85E87c980f2/a28ddc5a4ff91397.png'
      ]
    }
   
  },
  // toApplets(){
  //    wx.navigateToMiniProgram({
  //     appId: 'wxf63dcaf8f95ea541',
  //     path:  "pages/home/home", //跳转小程序的路径
  //     success(res) {
  //       // 打开成功
  //       console.log(res)
  //     } 
  //   })

  // },
  toProduct(e){
    let index = e.currentTarget.dataset.index;
    console.log(index)
    if(index === 0){
      wx.navigateTo({
        url: '../oneMachine/oneMachine',
      })
    }else{
      wx.navigateTo({
        url: '../logger/logger',
      })
    }
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