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
     width: 75%;
     padding: 20px;
     border-radius: 18px;
`;

export const Filter = styled.TouchableOpacity.attrs({
     activeOpacity: 1
})`
     justify-content: center;
     align-items: center;
     flex: 1;
`;

export const Text = styled.Text`
     font-size: 18px;
     text-align: center;
     color: #4F4F4F;
     margin-bottom: 10px;
`;

export const Options = styled.View`
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     width: 90%;
`;

export const BtnCancel = styled.TouchableOpacity`
`;

export const TextBtnCancel = styled.Text`
     font-size: 13px;
     color: rgba(79, 79, 79, 0.54);
`;

export const BtnDelete = styled.TouchableOpacity`
     background: #AB2626;
     padding: 13px 15px;
     border-radius: 15px;
`;

export const TextBtnDelete = styled.Text`
     color: #fff;
     letter-spacing: 1.2px;
     font-size: 15px;
`;