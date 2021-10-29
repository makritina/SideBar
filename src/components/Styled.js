import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(NavLink)`
padding: 80px 50px;
 display: block;
 height: 90px;
 position: relative;
 margin-bottom: 1px;
 color: #88a3d0;
 text-align: center;
 text-transform: uppercase;
text-decoration:none !important;


&:hover{
  color:#AAC0AA;
}

`;

export default StyledLink;
