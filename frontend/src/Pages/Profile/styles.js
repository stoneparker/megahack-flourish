import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
     flex: 1;
     justify-content: center;
     align-items: center;
`;


export const Title = styled.Text`
    font-size: 30px;
    color: #4F4F4F;
    position: relative;
    margin-left: 20%;
    width: 200px;
`;

export const SubTitle = styled.Text`
    font-size: 20px;
    color: #BEBEBE;
    position: relative;
    margin-left: 10%;
    width: 200px;
    margin-top: 3%;
    margin-bottom: 10%;
`;

export const FieldTitle = styled.Text`
    font-size: 20px;
    color: black;
    position: relative;

`;



export const ProfileBox = styled.View`
    border-radius: 30px;
    width: 90%;
    height: 80px;
    background: #51B2BC;
    margin-bottom: 5%;
`;