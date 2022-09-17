export const generateRandomColor = ()=>{
    const r = Math.ceil(Math.random()*255);
    const g = Math.ceil(Math.random()*255);
    const b = Math.ceil(Math.random()*255);
    console.log(r,g,b)
    return `rgb(${r},${g},${b})`
}
