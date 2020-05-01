import styled from 'styled-components/native';

export const Container = styled.ScrollView`
     flex: 1;
`;

export const Content = styled.View`
     align-items: center;
`;

export const InfoSector = styled.View`
     width: 80%;
     height: 80px;
     background: #51B2BC;
     padding: 20px 10px;
     border-radius: 13px;
     margin: 20px 0;

     justify-content: center;
     align-items: center;
`;

export const Value = styled.Text`
     font-size: 20px;
     color: #fff;
`;

export const Options = styled.View`
     flex-direction: row;
     justify-content: center;
     width: 80%;
     margin-top: 0px;
`;

export const BtnOption = styled.TouchableOpacity`
     border: 5px solid #F8D332;
     border-radius: 10px;
     padding: 10px 10px;
     margin: 0 5px;
     width: 40%;

     justify-content: center;
     align-items: center;
`;

export const TextBtnOption = styled.Text`
     font-size: 16px;
     color: rgba(0, 0, 0, 0.4);
`;

export const SubTitle = styled.Text`
     text-align: left;
     width: 85%;
     margin: 30px 20px 20px;
     font-size: 21px;
     color: rgba(79, 79, 79, 0.53);
`;

export const Spending = styled.View`
     margin-top: 20px;
`;

export const Card = styled.View`
     width: 300px;
     height: 100px;
     background: #51B2BC;
     margin: 5px 0;
     border-radius: 13px;
     padding: 20px;

     flex-direction: row;
     justify-content: space-between;
`;

export const IconsCard =  styled.View`
     justify-content: space-between;
     align-items: center;
`;

export const InfosExpense =  styled.View`
     justify-content: space-between;
`;

export const FirstLine = styled.View`
     flex-direction: row;
`;

export const TitleExpense =  styled.TextInput`
     font-size: 20px;
     margin-right: 10px;
     color: #fff;
     font-family: 'Fredoka One';
`;

export const DateExpense =  styled.Text`
     font-family: 'Fredoka One';
     font-size: 16px;
     color:rgba(255, 255, 255, 0.71);
`;

export const ValueExpense =  styled.Text`
     font-size: 22px;
     color: #fff;
`;