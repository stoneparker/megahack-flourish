import styled from 'styled-components/native';

export const Container = styled.View`
     flex: 1;
     justify-content: center;
     align-items: center;
`;

export const PlusButton = styled.TouchableOpacity`
     position: absolute;
     bottom: 0;
     right: 0;
     margin: 0 30px 30px 0;

     justify-content: center;
     align-items: center;

     width: 60px;
     height: 60px;
     border-radius: 30px;
     background: #F8D332;
     /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25); */
`;
