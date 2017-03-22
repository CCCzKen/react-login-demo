import React from 'react';


const Background = React.createClass({
    getInitialState: function() {
        const imageList = [
            '../img/background.jpg',
            '../img/background1.jpg',
            '../img/background2.jpg',
            '../img/background3.jpg',
            '../img/background4.jpg'
        ];
        return {
            imageList: imageList,
            index: 0
        }
    },
    componentDidMount: function() {
        setInterval(function() {
            var index = this.state.index;
            var style = 'url(' + this.state.imageList[index] + ')';
            this.refs.image.style = style;
            index = index + 1;
            if (index >= 5) {
                index = 0
            }
            this.setState({index: index});
        }.bind(this), 10000);
    },
    render: function() {
        var imageStyle = {
            backgroundImage: 'url(' + this.state.imageList[this.state.index] + ')'
        };
        return (
            <div className="bg-page">
                <div className="bg-image" ref="image" style={imageStyle}></div>
                <div className="overlay"></div>
            </div>
        )
    }
});

module.exports = Background;
