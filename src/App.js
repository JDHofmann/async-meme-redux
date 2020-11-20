import './App.css';
import { MemeList } from './MemeList';
import { connect } from 'react-redux'
import { fetchMemes } from './redux/actions'
import React from 'react'

class App extends React.Component{

  componentDidMount(){
    this.props.fetchMemes()
  }

  handleLoading = () => {
    if(this.props.loading === true){
      return <h3>Now loading memes...</h3>
      } else {
        return <MemeList 
        memes={this.props.memes}
      />
      }

      // this.props.loading ?
      // :
      
    
  }

  render(){
    console.log(this.props.loading)
    return (
      <div className="App">
        {this.handleLoading()}
        {/* <MemeList 
          memes={this.props.memes}
        /> */}
      </div>
    );
  }


  
}

const msp = state => {
  return {
    memes: state.memes,
    loading: state.loading
  }
}

export default connect(msp, { fetchMemes })(App);
