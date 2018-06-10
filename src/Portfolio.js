import React, {Component} from 'react'
import sampleimg from './images/sample.jpg'

class Portfolio extends Component {
   constructor(props){
       super(props)
       this.state = {
           pName : "This is My project",
           counter : 0,
           flag : false
       }
   }

  componentDidMount = () => 
  {
      this.setState({
        pName : "Neha sharma"
      })
  }

  increment = () =>{
      console.log('click me');
      if(this.state.flag == false) {
        this.setState({
            flag : true,
            counter :  this.state.counter + 1
          })
      }
      else{
        this.setState({
            flag : false,
            counter :  this.state.counter - 1
          })
      }
      
  }

   render(){
    return(
        <div className="portfolio">
         <h4>Portfolio</h4>
         <ul>
             <li onClick={this.increment}>
                 <figure>
                     <img src={sampleimg} alt="" title="" />
                 </figure>
                 <h3>{this.state.pName}</h3>
                 <p>{this.state.counter}</p>
             </li>
             
         </ul>
         </div>
     )
   }
}

export default Portfolio;