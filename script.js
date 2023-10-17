let Api_key= "3ffabd93f73f4c35969dc130819016b5"


window.addEventListener("load",()=>{
    fetchNews("india")
})




async function fetchNews(query){
    const resp= await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2023-09-17&sortBy=publishedAt&apiKey=3ffabd93f73f4c35969dc130819016b5`)

    const data = await resp.json()
    if (data.articles) {
        bindData(data.articles);
        console.log(data)
    } else {
        // Handle the case where data.articles is undefined or empty.
        console.error("No articles found for the given query.");
    }
}

function bindData(articles){
     const news_containerTemplate = document.getElementById("news_container");
     const container = document.getElementById("container");
     
     container.innerHTML=" "
     articles.forEach(article => {
         if(!article.urlToImage) return;
         const cardClone = news_containerTemplate.content.cloneNode(true)
        fillData(article,cardClone)
        container.appendChild(cardClone);
     });

     
}


function fillData(article,cardClone){
    const title =cardClone.querySelector("#title")
     title.innerHTML= article.title

     const urlToImage =cardClone.querySelector("#news-img")
     urlToImage.src=article.urlToImage

     const description =cardClone.querySelector("#description")
     description.innerHTML=article.description
     
     const publishedAt =cardClone.querySelector("#publishedAt")
     const date= new Date(article.publishedAt).toLocaleString("eng-US",{
        timeZone:"Asia/jakarta"
     })
      publishedAt.innerHTML=`${article.source.name}${date}`

      cardClone.firstElementChild.addEventListener("click",()=>{
          window.open(article.url,"_blank")
      })
}

const searchText= document.getElementById('Inputtext')
const searchButton= document.getElementById('SearchButton')

searchButton.addEventListener('click',()=>{
    const query = searchText.value;
    console.log("Search query: " + query);
    // if(!user) return;
    fetchNews(query);
})

const sports= document.getElementById("sports")
const technoloy= document.getElementById("technology")
const politics= document.getElementById("politics")
const health= document.getElementById("health")
const education= document.getElementById("education")

sports.addEventListener("click",()=>{
    fetchNews("sports")
})

technoloy.addEventListener("click",()=>{
    fetchNews("technology")
})

politics.addEventListener("click",()=>{
    fetchNews("politics")
})

health.addEventListener("click",()=>{
    fetchNews("health")
})

education.addEventListener("click",()=>{
    fetchNews("education")
})