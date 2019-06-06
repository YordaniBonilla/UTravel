import React from 'react';

//react library interprets jsx 
import { render } from 'react-dom';
import App from './App';

render(<App />, document.getElementById('app'));
//The first paramater represents What I WANT TO RENDER
//The second paramater represents Where I WANT TO RENDER IT
//<App /> will be placed in between the div tag with the id of app 
//inside our html file 