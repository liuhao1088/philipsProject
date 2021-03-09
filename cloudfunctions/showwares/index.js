// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'philips-9g4l4ppe860eed98',
  traceUser: true
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return [{
    name: '导航一体机CID-6680 1+32G',
    original_price: '3880',
    introduce: 'HDR流光夜视|全景影像3D|全网4G',
    link: 'http://www.funiaopark.com/images/shopping/shopping_philips.png',
    page: 'oneMachine'
  }, {
    name: '导航一体机CID-6680 2+32G',
    original_price: '4380',
    introduce: 'HDR流光夜视|全景影像3D|全网4G',
    link: 'http://www.funiaopark.com/images/shopping/shopping_philips.png',
    page: 'oneMachine'
  }, {
    name: '导航一体机CID-6680 4+64G',
    original_price: '4780',
    introduce: 'HDR流光夜视|全景影像3D|全网4G',
    link: 'http://www.funiaopark.com/images/shopping/shopping_philips.png',
    page: 'oneMachine'
  }, ]

}