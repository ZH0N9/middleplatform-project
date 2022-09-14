// get child img
export const getAllImgElements = (itemElements)=>{
    const imgElements= [];
    itemElements.forEach((item)=>{
        imgElements.push(...item.getElementsByTagName('img'));
    })
    return imgElements;
}
// get img link
export const getAllImgSrc = (imgElements)=>{
    return imgElements.map((img)=>{
        return img.src;
    })
}

export const loadAllImg=(imgSrc)=>{
    const promiseList =[];
    imgSrc.forEach((src,index)=>{
        promiseList.push(new Promise((resolve,reject)=>{
            const img = new Image();
            img.src=src;
            img.onload=()=>{
                resolve(img,index);
            }
        }))
    })
    return Promise.all(promiseList);
}
export const getMaxHeight = (itemObj)=>{
    const heights = Object.values(itemObj);
    return Math.max(...heights);
}
// find minimum height
export const getMinHeight = (itemObj)=>{
    const heights = Object.values(itemObj);
    return Math.min(...heights);
}
// find col with minimum height
export const getMinHeightCol = (itemObj)=>{
    const minHeight = getMinHeight(itemObj);
    const cols = Object.keys(itemObj);
    return cols.find((col)=>{
        return itemObj[col]===minHeight;
    })

}