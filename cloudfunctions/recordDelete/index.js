const cloud = require('wx-server-sdk')
cloud.init({
  env: 'philips-9g4l4ppe860eed98',
  traceUser: true
})
const db = cloud.database()
exports.main = async (event, context) => {
  console.log(event)
  const _ = db.command
  const wxContext = cloud.getWXContext()
  try {
    return await db.collection(event.collection).where(event.where).remove()
    .then(res => {
      console.log(res)
    })
    .catch(console.error)
  } catch (e) {
    console.log(e)
  }
}