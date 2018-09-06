const serve = require('koa-static')
const Koa = require('koa')
const app = new Koa()

// Travel项目
// app.use(serve('.'))
//
// app.listen(3000)
//
// console.log('listening on port 3000')
module.exports = async (ctx) => {
  ctx.state.data = {
    msg: 'hello Travel项目'
  }
}
