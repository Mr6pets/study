let name = "alvis";
function makeChange(stence) {
  return stence.toUpperCase();
}
let template = `
  <h1>${makeChange('hello')},${name}</h1>
  <p>这里是模版字符串的内容</p>  
`;
document.getElementById('template').innerHTML = template;