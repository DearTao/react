// const name = '董涛';
// const course = '前端开发工程师';
// console.log(`hello ${name},course is ${course}`)


//箭头函数
// function hello(name){
//     console.log(`hello ${name} ！`)
// }
// const hello1 = (name) =>{
//     console.log(`hello ${name} ！`)
// }
// hello('董涛')
// hello1('董涛')

// setTimeout(()=>{
//     console.log("xxx")
// },1000)

// const double = x=>x*2
// console.log(double(5))


// const hello = (name = 'imooc')=>{
//     console.log(`hello ${name} !`)
// }
// hello()
// hello('dongtao')



// function hello(name1,name2){
//     console.log(name1,name2)
// }
// let arr = ['imooc','dongtao']
// // hello.apply(null,arr)
// hello(...arr)


//Object扩展
// const obj ={name:'imooc',course:'react开发app'}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// const name = 'dongtao'
// const obj = {
//     name,
//     [name] :'react',
//     hello:function(){

//     }, 
//     hello(){

//     }
// }
// console.log(obj)


// const obj={name:'imooc',course:'react'}
// const obj2={type:'IT',name:'baba'}
// console.log({...obj,...obj2,data:'2017'})


//解构赋值
// const arr = ['hello','imooc']
// let [arr1,arr2] = arr
// console.log([arr1,arr2])
// console.log(arr1)

// const obj={name:'imooc',course:'react'}
// const {name,course} = obj
// console.log(name,'|',course)



//类
// class Myapp{
//     constructor(){
//         this.name = 'imooc'
//     }
//     sayHello(){
//         console.log(`hello ${this.name}`)
//     }
// }
// const app = new Myapp()
// app.sayHello()


//常见代码片段

// //遍历数组
// [1,2,3].forEach(function(value,index){
//     console.log(value)
// })
// //映射新数组
// arr = [1,2,3].map(v =>v*2)
// console.log(arr)
// //所有元素是否通过测试
// console.log([1,2,3,4].every(v=>v>3)) //false
// //是否有元素通过
// console.log([1,2,3,4].some(v=>v>3))  //true
// //过滤数组
// console.log([1,2,3,4].filter(v=>v>3)) //[4]
// //查找符合条件的元素
// arr = [{name:'dasheng',age:18},{name:'dongtao',age:18}]
// console.log(arr)
// //查找索引
// console.log([1,2,3].indexOf(2))
// //连接数组
// arr1=[1,2,3]
// arr2=[4,5,6]
// console.log([...arr1,...arr2])
//数组去重
// arr = [1,1,2,2,3,3]
// console.log([...new Set(arr)])
console.log(1)