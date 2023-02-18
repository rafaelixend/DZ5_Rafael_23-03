let books = ['кофта', 'книга', 'телефон', 'ноутбук', 'телевизор', 'очки', 'аудитория', 'бабушка', 'дедушка', 'улица', 'игрушка', 'утка']
let arrTrue=[]
let arrFalse=[]
let superFilter=(books)=> {
    for (let i of books) {
        if (i[0] === "у") {
            arrTrue.push(i)
        } else {
            arrFalse.push(i)
        }
    }
}
superFilter(books)
console.log("true arr : " +arrTrue)
console.log("false arr : " +arrFalse)


let str=prompt('Введи что хочешь')
function superReverse(str){
    var a=''
    for (i=0 ; i<str.length ; i++){
        a+=str[(str.length-1)-i]
    }
    return a
}

console.log(superReverse(str))
