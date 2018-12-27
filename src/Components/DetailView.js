import React, {Component} from 'react';
import './Styles/DetailView.css';

class DetailView extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section className="detail-view">
             <img src={this.props.sprite} className='sprite-image' alt="sprite"/>
            <div className='data-wrapper'>
              <h1 className='data-name'>ID: {this.props.id} {this.props.name}</h1>
              <p className="data-char">Type: {this.props.type}</p>
            </div>*/
          </section>  
        )
    }
}



export default DetailView;