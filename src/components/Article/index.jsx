import ArticleImage from '../../assets/images/Article/cover-image.png'

import './styles.css';

function Article() {
  return (
    <section className='article'>
      <div className='article-wrapper'>
        <div className='article-content'>
          <h3>Enter the world of all fashion trends</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus.</p>
        </div>
        <div className='article-img-wrapper'>
          <img src={ArticleImage} alt="Article image" />
        </div>
      </div>
    </section>
  )
}

export default Article;