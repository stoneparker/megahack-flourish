import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
     flex: 1;
     justify-content: center;
     align-items: center;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: #4F4F4F;
    position: relative;
    margin-right: 28%;
    width: 200px;
`;

export const GenTitle = styled.Text`
    font-size: 20px;
    color: #4F4F4F;
    position: absolute;
    padding-left: 72%;
    padding-bottom: 20%;
    width: 400px;
`;

export const Box = styled.View`
     
     justify-content: center;
     align-items: center;
     width: 100%;
`;

export const NextButton = styled.TouchableOpacity`
    border-radius: 30px;
    width: 90%;
    height: 50px;
    background: #79C255;
    margin-bottom: 15px;
`;