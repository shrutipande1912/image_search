const accessKey="xJDQq0eVzKeD0EytJZXeLeC9F2WJYoUWhTl2VbMFXxc"

const form=document.querySelector("form")
const inputE1=document.getElementById("search-input")
const searchResults=document.querySelector(".search-results")
const showmore=document.getElementById("show-button")


let inputdata=" "
let page=1;

async function searchImages(){
inputdata=inputE1.value;

const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accessKey}`

const response=await fetch(url)
const data=await response.json()

const results=data.results
if(page===1)
{
    searchResults.innerHTML=""
}

results.map((result)=>
    {
        const imageWrapper=document.createElement('div')
        imageWrapper.classList.add('search-result')
        const image=document.createElement('img')
        image.src=result.urls.small
        image.alt=result.alt_description
        const imagelink=document.createElement("a")
        imagelink.href=result.links.html
        imagelink.target="_blank"
        imagelink.textContent=result.alt_description

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imagelink)
        searchResults.appendChild(imageWrapper)




    }
    );

    page++;
    if(page>1)
    {
        showmore.style.display="block";
    }
}


form.addEventListener("submit",(event)=>
{
    event.preventDefault()
    page=1;
    searchImages();
});

showmore.addEventListener("click",()=>
{
    
    searchImages();
});

