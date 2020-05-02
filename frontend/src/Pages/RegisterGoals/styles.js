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
    margin-left: 150px;
    width: 200px;
`;

export const FinishButton = styled.TouchableOpacity`
    border-radius: 30px;
    width: 90%;
    height: 50px;
    background: #79C255;
    margin-bottom: 5%;
    margin-top: 5%;
   

`;

export const SaveAddButton = styled.TouchableOpacity`
    border-radius: 30px;
    width: 90%;
    height: 50px;
    background: #FFC326;
    margin-top: 20%;
   

`;

export const Viewer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ListGoals = styled.View`
    height: 50px; 
    width: 90%;
    border-radius: 30px;
    background: #51B2BC;
    margin-top: 5px;
`;

export const PickerBlinders = styled.Picker`
    background: #51B2BC;
    height: 50px;
    border-radius: 30px;
    width: 90%;
    color: white;
    
`;