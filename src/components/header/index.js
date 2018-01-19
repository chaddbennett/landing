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
                Cachemunk
                <img src="" id="cachemunk-logo" alt=""/>
              </div>
              <div className='nav-links-container'>
                <div className="nav-links">
                  SignUp
                </div>
                <div className="nav-links">
                  Log In
                </div>
              </div>
          </div>

    }
}
