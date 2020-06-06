import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
 
  class Carousel extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: '',
            
            
        }
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
    }
    
    generateItems() {
        var items = []
        var level
        console.log(this.state.active)
        for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
            var index = i
            if (i < 0) {
                index = this.state.items.length + i
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length
            }
            level = this.state.active - i
            items.push(<Item key={index} id={this.state.items[index]} level={level} />)
        }
        return items
    }
    
    moveLeft() {
        var newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        })
    }
    
    moveRight() {
        var newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        })
    }
    
    render() {
        return(

            <div>
            <h3 style={{marginTop:'30px', color:'grey', marginLeft:'35px'}}>Concept Videos</h3>
            <p style={{color:'grey', marginLeft:'35px'}}>Select a number</p>
            <div id="carousel" className="noselect">
            
                <div className="arrow arrow-left" onClick={this.leftClick}><i class="fa fa-arrow-circle-o-left"style={{fontSize:'40px',color:"grey",}} aria-hidden="true"></i></div>
                <TransitionGroup 
                    transitionName={this.state.direction}>
                    {this.generateItems()}
                </TransitionGroup>
               
                <div className="arrow arrow-right" onClick={this.rightClick}><i class="fa fa-arrow-circle-o-right" style={{fontSize:'40px',color:"grey"}} aria-hidden="true"></i></div>
           
            
                </div>
                 
                </div>
        )
    }
}

class Item extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level
        }
    }
    
    render() {
        const className = 'item level' + this.props.level
        return(
            <div className={className}>
                {this.props.id}
            </div>
        )
    }
}


export default Carousel;