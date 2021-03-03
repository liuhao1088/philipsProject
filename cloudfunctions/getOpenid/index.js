// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'philips-9g4l4ppe860eed98',
  traceUser: true
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}