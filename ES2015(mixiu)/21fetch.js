document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

//获取本地纯文本数据
function getText() {
  fetch('21test.txt')
    .then((res) => res.text())
    .then(data => {
      document.getElementById('output').innerHTML = data;
    })
}

//获取本地json数据
function getJson() {
  fetch('21posts.json')
    .then((res) => res.json())
    .then(data => {
      let output = '';
      data.forEach(element => {
        output += `<li>${element.title}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err))
}

//获取接口文件
function getExternal() {
  //https://api.github.com/users
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(item => {
        output += `<li>${item.login}</li>`;
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err))
}





