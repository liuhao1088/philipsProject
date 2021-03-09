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
    name: '导航一体机CID-1700',
    original_price: '3880',
    norm:[
      {
       name:"1+32G wifi版",
       checked:false
      },
      {
        name:"2+32G 4G版",
        checked:false
 
       },
       {
        name:"2+32G 4G版 2K",
        checked:false
 
       }
    ],
    introduce: 'HDR流光夜视|全景影像3D|全网4G',
    link: 'http://www.funiaopark.com/images/shopping/shopping_philips.png',
    page: 'oneMachine'
  }, {
    name: '导航一体机CID-6680',
    original_price: '4380',
    norm:[
      {
       name:"3+32G wifi版",
       checked:false
      },
      {
        name:"4+32G 4G版",
        checked:false
 
       },
       {
        name:"4+32G 4G版 2K",
        checked:false
 
       }
    ],
    introduce: 'HDR流光夜视|全景影像3D|全网4G',
    link: 'http://www.funiaopark.com/images/shopping/shopping_philips.png',
    page: 'oneMachine'
  }, {
    name: '导航一体机CID-1500',
    original_price: '4780',
    norm:[
      {
       name:"5+32G wifi版",
       checked:false
      },
      {
        name:"6+32G 4G版",
        checked:false
 
       },
       {
        name:"6+32G 4G版 2K",
        checked:false
 
       }
    ],
    introduce: 'HDR流光夜视|全景影像3D|全网4G',
    link: 'http://www.funiaopark.com/images/shopping/shopping_philips.png',
    page: 'oneMachine'
  }, ]

}