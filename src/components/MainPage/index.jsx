import React from 'react';
import axios from '../../config';

import Header from '../Header';
import NewsCard from '../NewsCard';

import './index.scss';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { articles: [] };
  }

  componentDidMount() {
    this.fetchNews();
  }

  async fetchNews() {
    const response = await axios.get(
      'https://newsapi.org/v2/top-headlines?sources=techcrunch'
    );
    const { articles } = await response.data;
    this.setState({ articles });
  }

  render() {
    const { articles } = this.state;
    const columns = Math.floor(articles.length / 3);

    return (
      <div className="main-page">
        <Header />
        <div>
          <div className="news-card-wrapper">
            {articles.map((article, id) => {
              return (
                <div className="">
                  <NewsCard key={id} {...article} />
                </div>
              );
            })}
          </div>
          <div className="news-card-wrapper">
            {articles.map((article, id) => {
              return (
                <div className="">
                  <NewsCard key={id} {...article} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
