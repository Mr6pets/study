// 函数参数默认值
// 优化代码

function makeAjaxRequest(url, method) {
  if (!method) {
    method = "GET"
  }
  return method;
}
console.log(makeAjaxRequest("google.com"));
console.log(makeAjaxRequest("google.com", "POST"));


// 参数默认值
function makeAjaxRequest(url, method = "GET") {
  return method;
}
console.log(makeAjaxRequest("google.com"));
console.log(makeAjaxRequest("google.com", "POST"));

function User(id) {
  this.id = id;
}
console.log(new User(1));//{id: 1}
function randomId() {
  return Math.random() * 999999;
}
console.log(new User(randomId()));//{id: 159030.49100732274}

function createAdminUser(user) {
  user.admin = true;
  return user;
}
console.log(createAdminUser(new User(randomId())));//{id: 173895.76013670154, admin: true}

const user = new User(1);
console.log(createAdminUser(user));//{id: 1, admin: true}





