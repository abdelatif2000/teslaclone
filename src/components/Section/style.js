import styled from 'styled-components'

export const Container =styled.div`
height:100vh;
`
export const ContaintHome =styled.div`
background-image: url(${props=>props.background});
height:100%;
background-position: center;
background-size: cover;
bacground-repeat:no-repeat;
padding:1px;
`
export const ItemsText=styled.div`
text-align: center;
margin-top: 15vh;      
`
export const InputLeft=styled.button`
 width:340px;
 height:38px;
 display:block;
 cursor:pointer;
 border-radius: 20px;
 background-color: rgba(0, 0, 0, 0.2);
 color:white;
 outline: none;
 border:none;
`;
export const InputRight=styled(InputLeft)`
   background:white;
   color:black;
   margin:10px
`;
export const GroupInputs=styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
align-content:center;


`
export const Title=styled.h1`font-size:6vh`
export const Desc=styled.p`
font-weight:600;
`
export const DownArrow=styled.img`
color: black;
display:black;
margin: auto;
height: 47px;
margin-top:25px;
animation:animationDown infinite 1.5s;
`
