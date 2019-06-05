import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

class Swap extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pictures: [] 
        };
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render () {
      return (
        <div>
        //need to be able to upload an image to database
        <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        <input/>
        //user location which is country
        //about
        //twitter 
        //facebook
        <input type='text'/>
        </div>
      );
    }  
        
}

export default Swap;