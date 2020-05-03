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

export const Content = styled.TouchableOpacity.attrs({
     activeOpacity: 1
})`
     justify-content: center;
     align-items: center;

     background: #fff;
     /* padding: 20px 40px; */
     /* height: 100px; */
     width: 90%;
     padding: 30px;
     border-radius: 10px;
`;

export const Filter = styled.TouchableOpacity.attrs({
     activeOpacity: 1
})`
     justify-content: center;
     align-items: center;
     flex: 1;
`;

export const Title = styled.Text`
     font-size: 24px;
     color: rgba(0, 0, 0, 0.8);
     margin-bottom: 20px;
`;

export const CalendarView = styled.View`
     width: 100%;
     height: 250px;
     background: #999;
     margin-bottom: 20px;
`;

export const Text = styled.Text`
     font-size: 16px;
     text-align: center;
     color: #474747;
     margin-bottom: 20px;
     margin-top: 20px;
`;