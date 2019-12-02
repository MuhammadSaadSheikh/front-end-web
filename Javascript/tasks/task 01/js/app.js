let parent = document.querySelector("#childWrapper")

const images = ['1.png' , '2.png' , '3.png']

images.map((val,ind) =>{
    console.log(val , ind)
    let pic = document.createElement('img')
    pic.setAttribute("class" , 'image')
    pic.setAttribute("id" , val)
    pic.setAttribute("")
})