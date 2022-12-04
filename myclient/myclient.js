import grpc from  'grpc'
 
const PROTO_PATH = __dirname+'/protos/my.proto'
const assetProto = grpc.load(PROTO_PATH).myservices
//前面三步与服务端一样
 
const client = new assetProto.forumService('127.0.0.1:17041',grpc.credentials.createInsecure());
//这里直接创建一个客户端，端口可以修改
  function getChannel(error, response) {
    if (error) {
      console.log(error);
      return;
    }
    console.log('channel is : ', response)
  }

  client.getforum({
    id : 2,
    title : '标题',
    content : '内容',
    channel : 1,
    createdAt : Date.now()/1000}, getChannel)

