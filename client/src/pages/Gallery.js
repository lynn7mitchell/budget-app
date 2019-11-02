import React, { Component } from 'react';

export class Gallery extends Component {
    state={
        isAdmin= false,
        albums=[]
    }

    //button to add a new album but on if isAdmin is true

    //Route to the CreateAlbum component

    //Route to Album Grid

    //Render Albums from the database using .map
    render() {
        return (
            <div>
                <h1>Gallery</h1>
            </div>
        )
    }
}

export default Gallery
