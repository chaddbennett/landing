import React from 'react';

import './_header.scss';

export default class Header extends React.Component {
    constructor(props){
      super(props);
      this.state={isHide:false};
      this.hideBar = this.hideBar.bind(this)
    }
    hideBar(){
       let {isHide} = this.state
       window.scrollY > this.prev ?
       !isHide && this.setState({isHide:true})
       :
       isHide && this.setState({isHide:false})

       this.prev = window.scrollY;
    }
    componentDidMount(){
        window.addEventListener('scroll',this.hideBar);
    }
    componentWillUnmount(){
         window.removeEventListener('scroll',this.hideBar);
    }
    render(){
        let classHide=this.state.isHide?"":"hide"
        return  <div className={"topbar "+classHide}>
              <div className="landing-logo">

                <img src="https://res.cloudinary.com/cachemunk-inc/image/upload/v1518216091/CM_Logo_White_Blue_Aligned_Left_nm3qax.png" id="cachemunk-logo" alt=""/>
              </div>
              <div className='nav-links-container'>
                <div className="nav-links">
                  <a href="https://www.cachemunk.com/signup">Sign Up</a>
                </div>
                <div className="nav-links">
                <a href="https://www.cachemunk.com/login">Log In</a>
                </div>
              </div>
          </div>

    }
}
