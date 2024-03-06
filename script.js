
let placeholder = document.querySelector(".placeholder")
const container = document.getElementById("container");

window.addEventListener("load",()=>{
    let node=placeholder.content.cloneNode(true)
     container.appendChild(node);
     fetchNews("sports")
})

async function fetchNews(query){
    const resp= await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${query}/in.json`)

    const data = await resp.json()
    if (data.articles) {
        bindData(data.articles);
        // console.log(data)
        let darkMode= document.querySelector("#darkMode")
        if(darkMode.innerText==="Dark"){
            whiteColor()
        }else{
            darkColor();
         }
    } 
}

function bindData(articles){
     const news_containerTemplate = document.getElementById("news_container");
    
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

      cardClone.addEventListener("load",()=>{
        cardClone.style.background="red"
      })
}


let classTechnology= document.querySelectorAll(".technology")
let classHealth= document.querySelectorAll(".health")
let classScience=document.querySelectorAll(".science")
let classBusiness=document.querySelectorAll(".business")
let classEntertainment=document.querySelectorAll(".entertainment")
let classGeneral=document.querySelectorAll(".general")
let classSports=document.querySelectorAll(".sports")


classTechnology.forEach(technology => {
    technology.addEventListener("click",()=>{
        fetchNews("technology");
        technology();
        technology.classList.add("active");
      
            
    })
    });


classHealth.forEach(health => {
    health.addEventListener("click",()=>{
        // health.classList.add("active")
        fetchNews("health")
    })
    });

    classScience.forEach(science=> {
     science.addEventListener("click",()=>{
            fetchNews("science")
        })
    });

    classBusiness.forEach(business => {
        business.addEventListener("click",()=>{
            fetchNews("business")
        })
         });


classEntertainment.forEach(entertainment => {
    entertainment.addEventListener("click",()=>{
        fetchNews("entertainment")
    })
});


classGeneral.forEach(general => {
     general.addEventListener("click",()=>{
        fetchNews("general")
    })
});

classSports.forEach(sports => {
    sports.addEventListener("click",()=>{
        fetchNews("sports")
    })
});

