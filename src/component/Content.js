import {Component} from "react";
//import React from 'react';
import dog from "./dog.png";

 class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {numImages: 1}
    }
    displayImages = () => {
        let {numImages} = this.state;
        let images = [];

        for (let i = 0; i < numImages; i++) {
            images.push(
                <img src={building} alt="building"/>
            );
        }
        return (
            images
        );
    }

    handleChange = (event) => {
        this.setState({numImages: event.target.value});
    }
                 //   {this.displayImages()}
       render(){
       return(
           <div>
           <div> Please Choose Number of Images
               <select value={this.state.numImages} onChange={this.handleChange}>
                   <option value="1">1</option>
                   <option value="2">1</option>
                   <option value="3">1</option>
                   <option value="4">1</option>
               </select>
           </div>
               {this.displayImages()}
           </div>
    );
    }
}
export default Content;