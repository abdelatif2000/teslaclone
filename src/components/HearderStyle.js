import Styled from 'styled-components';
export const HeaderStyle = Styled.div`
  width:100%;
  display:flex;
  position:fixed;
  color:#0c0b0ccf;
  align-items: center;
  margin-top:10px;
  padding:0 12px;
  z-index:1;
 
`
export const Logo = Styled.div` 
 width:30%;
 cursor:pointer;

`
export const Item = Styled.li`
color:#0c0b0ccf;
 a:hover{
  color:#0c0b0ccf;
  text-decoration: none;
 }
`

export const ListItems = Styled.ul`
display: flex;
width: 40%;
margin:5px 0;;
list-style: none;
justify-content: space-around;
font-weight:700;
text-transform: uppercase;
align-items: center;
@media (max-width:896px){
  display:none; 
}
`
export const Navbar = Styled.div`
width:30%;
font-weight:700;
color:#0c0b0ccf;
text-dicoretion:none;
text-transform: uppercase;
justify-self: flex-end;
text-align:right;
div {
  display:inline-block;
  margin: 0 7px;
  cursor:pointer;
  color:#0c0b0ccf;
};
@media (max-width:896px){
  width:70%;
  .MenuRight{
   display:none;
  }
};
`
export const ListGroup= Styled.ul`
   position:fixed;
   top:0;
   right:0;
   height:100vh;
   width:303px;
   transform:${props=>props.show===true ?"translateX(0)" :"translateX(100%)"};
   transition :transform 0.3s ;
   background:white;
   list-style:none;
   z-index:0;
   overflow:hidden;
   @media (max-width:376px){
     width:100%
   }
`
export const ListGroupItem= Styled.li`
font-weight:700;
cursor:pointer;
text-transform: uppercase;

`
export const BtnClose = Styled(ListGroupItem)`

`
