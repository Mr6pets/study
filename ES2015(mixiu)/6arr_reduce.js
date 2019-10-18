// 计算数组中所有值的总和
var numbers=[10,20,30];
var sum=0;
//es5
for (var i = 0; i < numbers.length; i++) {
    sum+=numbers[i];
}
console.log(sum);

// es6
var sumValue=numbers.reduce(function(sum,number){
    return sum+number
},0);//这里0是代表一个初始值
console.log(sumValue);

// 将数组中对象的某个属性抽离到另外一个数组中去

var primaryColors=[
    {color:"red"},
    {color:"yellow"},
    {color:"blue"}
]
var colors = primaryColors.reduce(function(previous,primaryColor){
    previous.push(primaryColor.color);
    return previous
},[]);
console.log(colors);

//判断字符串中括号是否对称
function balaceParens(string){
    return !string.split("").reduce(function(previous,char){
        //思路：如果字符串切割后的的数组是“(”符号 那就previous就加一
        //如果 是 ")" previous就减一 如果结果是0 那就是对称的

        //如果开头")"，最后也会等于0 所以现在开头出现 “）”，就返回 return previous
        if(previous<0){return previous};
        if(char=="("){ return ++previous}
        if(char==")"){ return --previous}
        //如果 previous 前面是其他字符 就return
        return previous;
        

    },0)
}
console.log(balaceParens("fdafafda(((()"));