//服务器人口文件
//1.创建koa的实例对象
const Koa = require('koa');
const app = new Koa();
//2.绑定中间件
//绑定第一个中间件
const respDurationMiddleware = require('./middleware/koa_response_duration')
app.use(respDurationMiddleware)

//绑定第二个中间件
const respHeaderMiddleware = require('./middleware/koa_response_header')
app.use(respHeaderMiddleware)

//绑定第三个中间件
const respDataMiddleware = require('./middleware/koa_response_data')
app.use(respDataMiddleware)

app.listen(8888)

const webSocketService = require('./service/web_socket_service.js');
//开启服务端监听
//当某一个客户端连接成功后，就会对这个客户端进行message事件进行监听
webSocketService.listen()