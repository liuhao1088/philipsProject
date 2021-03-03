const cloud = require('wx-server-sdk')
cloud.init({
  env: 'philips-9g4l4ppe860eed98',
  traceUser: true
})
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.subscribeMessage.send({
        touser: event.openid,
        page: event.page,
        lang: 'zh_CN',
        data: event.data,
        templateId: event.templateId,
        miniprogramState: 'formal'//developer
      })
    return result
  } catch (err) {
    return err
  }
}