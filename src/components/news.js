import React, { Component } from 'react'
import Newscomponent from './newscomponent'
import PropTypes from 'prop-types'


export class news extends Component {
  static defaultProps = {
    country:'in',
    pageSize:8
  };
  
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  };

  constructor(props) {
    // here you have to use the super class if not then you will get the error
    super(props);
    console.log("Hi i am a constructor");
   
    this.state = {
      loading:false,
      articles:[],
       page:1,

    }
    document.title=`${this.props.category} - news here`;
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee1207665b9149efb11976dbb7614d69&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata=await data.json()
    console.log(parsedata);
    this.setState({articles : parsedata.articles,totalResults:parsedata.totalResults})
  }
   handlenextclick=async ()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

    }

    else{

      
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee1207665b9149efb11976dbb7614d69&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedata=await data.json()
      console.log(parsedata);
      // this.setState({articles : parsedata.articles})
      
      this.setState({
        page:this.state.page+1,
        articles : parsedata.articles
      })
    }
  }
 handlepreviousclick=  async()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee1207665b9149efb11976dbb7614d69&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata=await data.json()
    console.log(parsedata);
    this.setState({
      page:this.state.page-1,
      articles : parsedata.articles
    })
  }

  render() {
    return (
      <div className='container  my-3 '  >
        <h1 className="text-center " style={{marginTop:'90px'}}>News-top head lines</h1>
        {/* <spinner/> */}

        <div className="row">
        {this.state.articles.map((element)=>{
  
          return  <div key={element.url?element.url:""} className="col-md-4  my-3">
          <Newscomponent autor={element.author} date={element.publishedAt} title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,50):""} imgurl={element.urlToImage}  url={element.url}/>
        </div>
        })}  
        </div>

        <div className="container d-flex justify-content-between">
        <button  disabled={this.state.page<=1}  type="button" className="btn btn-secondary" onClick={this.handlepreviousclick}>Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-secondary"  onClick={this.handlenextclick}>Next</button>
        </div>

      </div>
    )
  }
}

export default news

