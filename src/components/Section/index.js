import React, { Component } from 'react'
import {Container,ContaintHome,ItemsText,GroupInputs,InputLeft,InputRight,Title,Desc,DownArrow} from './style'
import Fade from 'react-reveal/Fade';

export default class Section extends Component {
    render() {
        return (
            <Container >
                 <ContaintHome background={this.props.background}>
                    <ItemsText>
                       <Fade bottom> <Title >{this.props.title}</Title>
                               <Desc>{this.props.desc}</Desc>
                        </Fade>
                    </ItemsText>
                    <GroupInputs>
                        <InputLeft>{this.props.leftBtn ? this.props.leftBtn : " Custom Order"}</InputLeft>
                       {this.props.rightBtn && 
                        <InputRight> {this.props.rightBtn ? this.props.rightBtn :"Existing Inventry"} </InputRight>
                       }
                           {/* <DownArrow src='images/down-arrow.svg' /> */}
                      
                    </GroupInputs>
                 
                 </ContaintHome>
            </Container>
        )
    }
}
