var messageList = [];

function processingMessage (message) {
    console.log('体育频道收到消息', message);
    messageList.push(message);
    messageList.sort(function(a, b) { return b.id - a.id });
    console.log('体育频道收到所有消息', messageList);
    console.log('分页数据', getPaging (2, 1));
} 
function getPaging (num, pig) {
    if (messageList.length < num * (pig-1)) {
        return "该页无数据";
    }
    var end = pig * num;
    if(messageList.length < end) {
        end = messageList.length;
    }
    return messageList.slice(num * (pig-1), end);
}

module.exports = {
    processingMessage : processingMessage
}