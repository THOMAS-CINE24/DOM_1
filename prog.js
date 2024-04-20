


let likes = {
    'article1': 0
  };
    function likeArticle(articleId) {
    likes[articleId]++;
    document.getElementById(articleId + '_likes').innerText = likes[articleId] + ' likes';
  }