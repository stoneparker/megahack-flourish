import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
     flex: 1;
     align-items: center;
     padding-top: ${Constants.statusBarHeight + 40}px;
     background: #fff;
`;

export const Title = styled.Text`
     font-size: 24px;
     margin-bottom: 7px;
`;

export const Proportion = styled.Text`
     font-size: 20px;
     color: #A3A3A3;
`;

export const InfosGoal = styled.View`
     width: 80%;
     height: 100px;
     background: #51B2BC;
     padding: 20px 10px;
     border-radius: 13px;
     margin: 20px 0;

     justify-content: space-between;
     align-items: center;
`;

export const Value = styled.Text`
     font-size: 20px;
     color: #fff;
`;

export const Text = styled.Text`
     font-size: 18px;
     color: #fff;
`;

export const Span = styled.Text`
     color: #AB2626;
`;

export const TextGray = styled.Text`
     font-size: 19px;
     color: #BABABA;
     margin-top: 5px;
`;

export const WhenView = styled.View`
     /* height: 50px; */
     background: #79C255;
     padding: 10px 20px;
     border-radius: 13px;
     margin: 15px 0;

     align-items: center;
     justify-content: center;
`;

export const Days = styled.Text`
     font-size: 22px;
     color: #fff;
`;

export const Options = styled.View`
     flex-direction: row;
     justify-content: space-between;
     width: 80%;
     margin-top: 30px;
`;

export const BtnOption = styled.TouchableOpacity`
     border: 5px solid #F8D332;
     border-radius: 10px;
     padding: 10px 20px;
     width: 45%;

     justify-content: center;
     align-items: center;
`;

export const TextBtnOption = styled.Text`
     font-size: 16px;
     color: rgba(0, 0, 0, 0.4);
`;