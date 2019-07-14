function reverseString(message){
  // wirte your code here
  var messageArray = message.split('');
  var messageArrayReverse = [];
  for(let i = messageArray.length - 1; i >= 0; i--){
	  messageArrayReverse.push(messageArray[i]);
  }
  return messageArrayReverse.join('');
}
reverseString('hello');