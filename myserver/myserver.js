import grpc from 'grpc'        //引入grpc
 
const PROTO_PATH = __dirname+'/protos/my.proto'    
 
const myProto = grpc.load(PROTO_PATH).myservices

const consts = require('./channel/consts');
const sport = require('./channel/sport'); 

const getforum = (call,callback)=>{  
    console.log('收到消息',call.request);
    if(call.request.channel == consts.SPORT_CHANNEL) {
        sport.processingMessage(call.request);
        callback(null, {
            id : call.request.channel,
            name: "体育频道"
        })
    }else{
        callback(null,{
            id:-1,
            name: "无此频道"});
    }  
}
 
const server = new grpc.Server();    //创建一个grpc的服务
 
server.addProtoService(myProto.forumService.service,{
    getforum: getforum})

server.bind('127.0.0.1:17041',grpc.ServerCredentials.createInsecure())
//服务启动
server.start();
