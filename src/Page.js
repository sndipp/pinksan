import React, { Component } from 'react'
import Pagination from 'react-bootstrap/Pagination'
import './App.scss';
export default class Page extends Component {
    render() {
        return (
            
            <div style={{marginTop:"350px",color:'grey',marginLeft:'20px'}} className="shadow mb-5 p-5">
                <h3>Live Classes</h3>
                <p>Select a number</p>

                <div>
                <Pagination size="lg">
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item >{4}</Pagination.Item>
                        <Pagination.Item>{5}</Pagination.Item>
                        <Pagination.Item >{6}</Pagination.Item>
                        <Pagination.Item>{7}</Pagination.Item>
                        <Pagination.Item >{8}</Pagination.Item>
                        <Pagination.Item>{9}</Pagination.Item>
                        <Pagination.Item >{10}</Pagination.Item>
                </Pagination>
                </div>
                
            </div>
        )
    }
}
