/*
封装fetch
更加便捷的请求数据
*/

class EasyHttp {
  //get请求
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json()
    return resData;
  }
  //post请求
  async post(url, data) {

    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData;
  }
  //put 跟新数据
  async put(url, data) {

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData;
  }

  //删除
  delete(url) {

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        'content-type': 'application/json'
      }
    })
    const resData = await "数据删除成功"
  }
}








