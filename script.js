let country='in';
let apikey='a5d7545efd374902b450d63d3d22fd56'
// api key- a5d7545efd374902b450d63d3d22fd56
let newsAccordion=document.getElementById('newsAccordion');
const xhr=new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`,true);
xhr.onload=function(){
    if(this.status===200){
        let json=JSON.parse(this.responseText);
        let articles=json.articles;
        let newsHtml="";
        // console.log(articles);
        articles.forEach(function(element,index) {
            let news=`<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                    ${element["title"]}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}"
                data-bs-parent="#newsAccordion">
                <div class="accordion-body">
                 ${element["description"]} <a href=${element['url']} target="_blank"> Read more here</a>
                </div>
            </div>
        </div>`
        newsHtml+=news;
         });
        newsAccordion.innerHTML=newsHtml;
    }
    else{
        console.log("Some error Occured");
    }
}
xhr.send();
