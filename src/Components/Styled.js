import styled from 'styled-components';
import { primary_light, secondary_dark, secondary_light } from '../Colors';

const Card = styled.div`
  height: ${props => props.height ? props.height : "50%"};
  box-sizing: border-box;
  max-width: 410px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Form = styled.div`
  & {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  & > * {
    margin-top: 2rem;
  }
`;

const Input = styled.input`
  & {
    background-color: transparent;
    border-width: 0 0 0 0;
    border-bottom: 1px solid ${secondary_dark};
    padding: 5px;
    font-size: 1.5rem;
    color: ${secondary_light};
    transition: border-bottom-color 0.25s;
    text-align: center;
  }
  &:focus {
    outline-width: 0;
    border-bottom-color: ${secondary_light};
  }
  &::placeholder {
    text-align: center;
    color: ${secondary_dark};
    letter-spacing: 1px;
  }
  &:valid {
    border-bottom-color: ${secondary_light};
  }
`;

const Button = styled.button`
  width: 50%;
  border: 3px ${secondary_dark} solid;
  border-radius: 20px;
  padding: 10px 0;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 2px 2px 4px black ${props => !(props.primary) && ", inset 2px 2px 4px black"};
  text-shadow: ${props => !(props.primary) && "2px 2px 4px black"};
  transition: box-shadow 0.2s;
  transition: text-shadow 0.2s;
  background: ${props => props.primary ? secondary_dark : "transparent"};
  color: ${props => props.primary ? primary_light: secondary_dark};
  &:hover {
    box-shadow: 3px 3px 4px black ${props => !(props.primary) && ", inset 3px 3px 4px black"};
    text-shadow: ${props => props.primary ? "0" : "3px 3px 4px black"};
  }
  &:active, &:focus {
    outline-width: 0;
  }
  &:active {
    box-shadow: 2px 2px 4px black ${props => !(props.primary) && ", inset 2px 2px 4px black"};
    text-shadow: ${props => !(props.primary) && "2px 2px 4px black"};
  }
`;

const Icon = styled.img`
  filter: drop-shadow(${props => props.shadow ? props.shadow : "4px 4px 2px black"});
  cursor: ${props => props.clickable ? "pointer" : "default"};
  width: ${props => props.size ? props.size : "50%"};
  height: auto;
`;

const Error = styled.div`
  background-color: red;
`;

const MagnetBox = styled.div`
  display: flex;
  ${props => props.height && "height:" + props.height + ";"}
  ${props => 
      (props.right && "justify-content:flex-end;") || 
      (props.left && "justify-content:flex-start;") || 
                    "justify-content:center;"}
  ${props => 
      (props.top && "align-items:flex-start;") || 
      (props.bottom && "align-items:flex-end;") || 
                    "align-items:center;"}
  ${props => (props.distance) &&
      ((props.right && "padding-right:" + props.distance + ";") || 
      (props.left && "padding-left:" + props.distance + ";"))}
  ${props => (props.distance) &&
      ((props.top && "padding-top:" + props.distance + ";") || 
      (props.bottom && "padding-bottom:" + props.distance + ";"))}
`;

const Par = styled.p`
  color: ${secondary_dark};
  font-size: 1.5rem;
  padding: 2rem;
  letter-spacing: 0.5px;
`;

export { Par, Form, Input, Button, Icon, Card, Error, MagnetBox };
