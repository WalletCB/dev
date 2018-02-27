import React, { Component } from 'react';
import styles from './app.css';

import Menu from './component/Menu/Menu.jsx';
import Aside from './component/Aside/Aside.jsx';
import One from './component/One/One.jsx';
import Two from './component/Two/Two.jsx';

class App extends Component {

  state = {
      focused: false
  };

  onClick = event => {
    event.preventDefault();
    if(this.state.focused == 0){
      this.setState({ focused: true });
    }else{
      this.setState({ focused: false });
    }
  };


  render() {
      const { focused } = this.state;
    return (
      <div className={styles.app} >
        <One />
        <Aside onClick={ this.onClick } />
        <Two />

        <Menu
          items={ ['About us', 'Our products', 'Contact Us'] }
          state={ focused }
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default App;
