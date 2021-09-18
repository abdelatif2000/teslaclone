import React, { Component } from 'react'
import {HeaderStyle,Logo,Item,ListItems,Navbar,ListGroup,ListGroupItem,BtnClose} from './HearderStyle'
export default class Header extends Component {
   state={
       show:false
   }
   onclick=()=>{
       this.setState({show: !this.state.show});
   }
    render() {
        return (
            <HeaderStyle>
                <Logo >
                   <a><img src='images/logo.svg' /></a>
                </Logo>
                <ListItems>
                    <Item>
                      <a href='#'>model s</a> 
                    </Item>
                    <Item>
                    <a href='#'>model 3 </a> 
                    </Item>
                    <Item>
                    <a href='#'> model x</a>  
                    </Item>
                    <Item>
                    <a href='#'> model y</a> 
                    </Item>
                </ListItems>
                <Navbar > 
                         <div className="MenuRight">
                          <div >shop</div>
                          <div >tesla account</div>
                         </div>
                          <div onClick={this.onclick}  class="fas 3x fa-bars"></div>
                </Navbar>
                
                <ListGroup show={this.state.show}  className="list-group">
                        <BtnClose onClick={this.onclick} className="first list-group-item"><i  class="fas fa-times"></i></BtnClose>
                        <ListGroupItem className="list-group-item">model s </ListGroupItem>
                        <ListGroupItem className="list-group-item">model 3</ListGroupItem>
                        <ListGroupItem className="list-group-item">model y</ListGroupItem>
                        <ListGroupItem className="list-group-item">existing inventory</ListGroupItem>
                        <ListGroupItem className="list-group-item">uded inventory</ListGroupItem>
                        <ListGroupItem className="list-group-item">trade-in </ListGroupItem>
                        <ListGroupItem className="list-group-item">cybertruck </ListGroupItem>
                        <ListGroupItem className="list-group-item">roadaster</ListGroupItem>
                        <ListGroupItem className="list-group-item">inventory</ListGroupItem> 
                        <ListGroupItem className="list-group-item">existing</ListGroupItem>
                        <ListGroupItem className="list-group-item">roadster</ListGroupItem>
               </ListGroup>
                
            </HeaderStyle>
        )
    }
}

