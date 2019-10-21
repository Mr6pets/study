const http = new EasyHttp;

//请求数据 get
// http.get("https://jsonplaceholder.typicode.com/users")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(err => console.log(err))

//传输数据 post
const data = {
  name: "alvis",
  username: "mimi",
  emial: "11111111@qq.com"
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//更新数据 put
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

//删除 delete
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then((data) => { console.log(data) })
  .catch(err => console.log(err));

