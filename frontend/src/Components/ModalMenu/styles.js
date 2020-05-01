import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
     display: ${props => props.state === 'close' ? 'none' : 'flex'};
     flex: 1;
     align-items: center;
     justify-content: center;

     background: rgba(0, 0, 0, 0.2);
     width: 100%;  
     z-index: 5;
`;

export const Modal = styled.View`
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