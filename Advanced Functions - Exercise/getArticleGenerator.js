function getArticleGenerator(articles) {
    let divContent = document.getElementById('content');
    let articlesCopy = articles.slice()
    
        return function nextArticle(arr = []) {
            if (articlesCopy[0] !== undefined) {
                const article = document.createElement('article');
                article.innerHTML = articlesCopy.shift();
                divContent.appendChild(article);
            }
            return nextArticle;
        }    
    
}
