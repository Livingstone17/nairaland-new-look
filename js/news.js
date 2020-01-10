

const allNews = document.getElementById('ourNews');

const route = 'https://newsapi.org/v2/top-headlines?country=ng&apiKey=fc1ef7f0d8ba45688bfe39be80c4aa58';

const getNews = () => {
  fetch(route, {
     headers: {
    //   'Content-Type': 'application/json',
        //   'API-Key': 'fc1ef7f0d8ba45688bfe39be80c4aa58',
        //   'Access-Control-Allow-Origin': 'https://newsapi.org/v2/',
        //   'credentials': 'include',
        //   'Access-Control-Allow-Credentials': 'true',
    //   'Access-Control-Allow-Headers':'access-control-allow-origin'
    },
  })
  .then(res => res.json())
    .then((data) => {
      if (data.articles.length < 1) {
        console.log('No top articles yet')
      } else {
        const newsUpdate = data.articles;
        
          return newsUpdate.map((news) => {
            let newsDetails = `
                <div class='thread-item'>
                <a href=${news.url}>
                    ${news.title} </a>
                <div class='metadata'>
                    <div class='thread-owner-details'>
                    <img style="width:30px; height: 30px" src=${news.urlToImage}
                    </div>
                </div>
                </div>
            `;
            allNews.innerHTML += newsDetails;
            // console.log('here are your articles', newsUpdate);
        })
      }
  });
};

window.onload = getNews('#ourNews');
