import React, { Component } from 'react';
import '../node_modules/antd/dist/antd.css';
import './App.css';
import Styles from './Styles.module.css';
import './Responsiv.css';
// import { Button } from 'antd/lib/radio';
class Snackbar extends Component {
    message = 'Snackbar'

    state = {
      isActive: false,
    }

    closesnack(e) {
      this.setState({
        isActive: false,
      });
    }
    
  
    openSnackBar = (message = 'Something went wrong...') => {
      this.message = message;
      this.setState({ isActive: true }, () => {
        setTimeout(() => {
          this.setState({ isActive: false });
        }, 2000);
      });
    }
    
    render() { 
        const { isActive } = this.state;
        return ( 
            <div className = {isActive ? [Styles.snackbar, Styles.show,Styles.clrred].join(" ") : Styles.snackbar}>
               <div className="flex message-snackbar"> {this.message}
                <i className="kejar-icon-v2 icon-Close-toast font-22" onClick={() => this.closesnack()}></i></div>
            </div>
         );
    }
}

 
export default Snackbar;
