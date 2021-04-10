const message = ["Girl! you've got this!!", "Girl!! it's okay for you to be as mad as you want with the world!", "It's all okay to shed all dem tears!", "Just always love and ride for yourself!", "You've got you, Baby Girl!!", "You might be a black Bill Gates in the making!!!"];

function randomScript(msg){
  for(let i = 0; i < msg.length; i++){
    let randMsg = Math.floor(Math.random([i]) * msg.length)
    return msg[randMsg];
  }
}

console.log(randomScript(message));