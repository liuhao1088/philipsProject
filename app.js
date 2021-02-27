// app.js
App({
  onLaunch() {
    let that = this;
    that.globalData.height = wx.getSystemInfoSync().windowHeight;
  },
  globalData: {
    userInfo: null,
    height:0
  }
})
