// import React, { Component } from 'react'
import React from 'react'

// export class newscomponent extends Component {
  const newscomponent =(props)=>{
  
  // render() {                                    this.props;  ithe this . props hota class to function based madhe kartana fakt props 
  //                                                            pass kel 
    let {title,discription,imgurl,url,author,date} = props;//  this is called as the destructuring and using the props 
    return (
      <div className='my-3'>
        <div className="card shadow" >
          <img src={!imgurl?"https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw":imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{discription}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {date}</small></p>
            <a rel='noreferrer' href={url} target='_blank' className="btn btn-sm btn-primary">Read More</a>  
          </div>
        </div>

      </div>
    )
  // }
}

export default newscomponent
