import React, {Component} from 'react';
import Header from './Header';

export default class Home extends Component{

    render() {
        return (
            <div className='App'>
              <header>
                  <Header />
              </header>
              <h1>This is the Home component</h1>
            </div>
        )
    }
}