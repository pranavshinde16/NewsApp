import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1); }

  // Update Function
  const updateNews= async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalArticles(parsedData.totalResults)
    setLoading(false)
  }

  // DEFAULT 
  useEffect(() => {
      updateNews();
      document.title = `${capitalizeFirstLetter(props.category)} - NewsTracker`
  }, [])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalArticles(parsedData.totalResults)
    // setLoading(false)
  }

    return (
      <>
        <h2 className="text-center" style={{marginTop:"75px"}}>
          &#10031; News Tracker - Top headlines from {capitalizeFirstLetter(props.category)} domain &#10031;
        </h2>

        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalArticles}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row my-1">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      key={element.url}
                      description={
                        element.description
                          ? element.description.slice(0, 120)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      time={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
// https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=9b31728969784ba49862037eb80594c7&page=1&pageSize=15

