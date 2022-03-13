import { DivHelper as Diva } from './DivHelper';
import { ButtonHelper as Buttona } from './ButtonHelper';
import  styled from 'styled-components';



const Button = styled(Buttona)`
     padding: 90px 90px 90px 90px;
     background-color: ${props => props.colornow};
     
  box-shadow: 5px 10px 8px #888888;
     opacity: 0.95
     `;
     
const Div = styled(Diva)`
     visibility: ${props => props.ngumpet};
     display: inline-block;
     `;


export {Button, Div};

