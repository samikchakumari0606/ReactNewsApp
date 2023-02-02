import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


class News extends Component {

  static defaultProps={
    country:"in",
    pageSize:8,
    category:"general",
  }

  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  
  constructor() {
    super();
    console.log("hello I am a constuctor from news component");

    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }


  async componentDidMount(){
    // console.log("cdm")
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51e689a74cd14dc38756453f72124e04&pageSize=${this.props.pageSize}`
    let data=await fetch(url);
    let parsedata=await data.json();
    console.log("parsedata",parsedata)
    this.setState({articles:parsedata.articles,
         totalResults:parsedata.totalResults})
  }

 handlePrevClick=async()=>{
  console.log("prev")

  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51e689a74cd14dc38756453f72124e04&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
  let data=await fetch(url);
  let parsedata=await data.json();
  console.log("parsedata",parsedata)
  this.setState({articles:parsedata.articles})
  this.setState({
    page:this.state.page-1
  })
 }

 handleNextClick=async ()=>{
  console.log("next")

  if(this.state.page+1> Math.ceil(this.state.totalResults/20)){
       
  }
  else{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51e689a74cd14dc38756453f72124e04&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    let data=await fetch(url);
    let parsedata=await data.json();
    console.log("parsedata",parsedata)
    this.setState({articles:parsedata.articles})
    this.setState({
      page:this.state.page+1
    })
  }
  
 }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{marginTop:"90px"}}>NewsRoom- Top Headlines</h2>
        {/* {this.state.loading && <Spinner/>} */}
        <div className="row my-2">
          {this.state.articles.map((element) => {
            // console.log(element)

            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title:""}
                  description={element.description?element.description:""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
      <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
