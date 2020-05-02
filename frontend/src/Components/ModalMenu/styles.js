import styled from 'styled-components/native';

export const ModalV = styled.TouchableOpacity`
     display: ${props => props.state === false ? 'none' : 'flex'};
     flex: 1 !important;
     align-items: center;
     justify-content: center;

     background: rgba(0, 0, 0, 0.5);
     height: 100%;
     position: absolute;
     width: 100%;  
     z-index: 6;
`;

export const Menu = styled.View`
     justify-content: center;
     align-items: center;

     background: #fff;
     padding: 20px 40px;
     border-radius: 10px;
`;

export const Option = styled.Text`
     font-size: 20px;
     padding: 3px;
`;