import { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "abc",
        bio: "bio",
        imgSrc: "https://placehold.co/600x400",
        profession: "student",
      },
      show:true,
      count:0
    };
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({count:this.state.count+1})
    }, 1000);
  }
  render() {
    return <div>

 {
     this.state.show==true?  <div className="profile">
       <img src={this.state.person.imgSrc} alt="" />
       <h4>{this.state.person.fullName}</h4>
       <p>{this.state.person.bio}</p>
     </div>:null
 }
 <h1>{this.state.count} </h1>
      <button onClick={()=>this.setState({show:!this.state.show})}>show</button>

    </div>;
  }
}
