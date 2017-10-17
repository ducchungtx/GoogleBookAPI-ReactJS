import React, { Component } from 'react';

class Gallery extends Component {
    
    render() {
        let notfound = 'http://www.freeiconspng.com/uploads/-icons-smart-objects-3d-book-mockup-psd-address-book-icon-psd-preview-5.png';
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let { title, imageLinks, infoLink } = item.volumeInfo;
                        return (
                            <a 
                                key={index}
                                className="book"
                                href={infoLink}
                                target="_blank"
                            >
                                <div>
                                    <img 
                                        src={ imageLinks ? imageLinks.thumbnail : notfound } 
                                        alt={ title } 
                                        className="book-img"/>
                                    <div className="book-text">
                                    { title } 
                                    </div>
                                </div>
                            </a>
                        );
                    })
                }
            </div>
        );
    }
}

export default Gallery;