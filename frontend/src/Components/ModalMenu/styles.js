import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
     display: ${props => props.isVisible === false ? 'none' : 'flex'};
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
     /* padding: 20px 40px; */
     /* height: 100px; */
     width: 60%;
     padding: 10px 0;
     border-radius: 10px;
`;

export const Option = styled.TouchableOpacity.attrs({
     activeOpacity: 1
})`
     width: 100%;
     padding: 10px 0;
     border-bottom-width: ${props => props.position === "last" ? 0 : StyleSheet.hairlineWidth}px;
     border-bottom-color: rgba(0, 0, 0, 0.2);
`;

export const Filter = styled.TouchableOpacity.attrs({
     activeOpacity: 1
})`
     justify-content: center;
     align-items: center;
     flex: 1;
`;

export const TextOption = styled.Text`
     font-size: 20px;
     text-align: center;
`;