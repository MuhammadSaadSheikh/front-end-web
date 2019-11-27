let body = document.querySelector('#mainWrapper')
temp = () =>{
    body.innerHTML = `    <div>
    <h1>Hello World</h1>
    </div>`
}

let arr = [1,2,4,6,16,21,1,8,3,4]

arr.map(val => console.log( 'MAp ==>' ,val))

let metohd2 = arr.filter(val=>{
    return val % 2 == 0
})

console.log('Filter => ' ,metohd2)

arr.forEach(val =>{
    let method2 = val % 2 == 0 
    console.log('ForEach ==>' ,method2 )
})
