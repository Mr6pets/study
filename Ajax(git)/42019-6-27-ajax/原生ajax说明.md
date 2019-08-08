#这里是原生ajax验证的一些说明文档

>接口文件书写小样

```javascript
//验证用户名
/*
	get
	guestbook/index.php
	m:index
	a:verifyUserName
	username:要验证的用户名
	返回
	{
		code:返回的信息代码 0=>没有错误 1=>有错误
		message:返回的信息
	}
*/
```

> 原豆瓣接口演示	

GET http://api.douban.com/book/subjects

请求参数

| 请求参数    | 意义             | 备注 |
| :---------- | ---------------- | ---- |
| q           | 全文检索的关键字 |      |
| tag         | 搜索特定tag      |      |
| start-index | 起始元素         |      |
| max-results | 放回结果数量     |      |

例如：

`GET  http://api.douban.com/movie/subjects?tag=cowboy&start-index=1&max-result=2`	

返回结果

`豆瓣接口已失效 所以只能自己模拟了`



> node接口可以参考下

`https://cnodejs.org/api`

```javascript

```























