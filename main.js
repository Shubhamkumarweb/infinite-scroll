const container=document.querySelector(".container");
const url="https://picsum.photos/id/";
function getRandom(){
 return Math.floor(Math.random()*300);
}
function loadImages(imagecount=12){
for(let i=0;i<imagecount;i++)
{
    const img=document.createElement("img");
    img.src=`${url}${getRandom()}/300/400`;
    console.log(img.src)
    container.appendChild(img);
}
}
loadImages();
window.addEventListener("scroll",()=>{
    if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight){
        loadImages();
    }
})
