import styled from 'styled-components/native';
import Constants from 'expo-constants';


export const Container = styled.View`
     flex: 1;
     padding-top: ${Constants.statusBarHeight + 10}px;
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

export const ContainerIcon = styled.View`
     /* align-items: flex-end; */
     margin: 0 20px 5px 20px;
`;

export const ContainerLeftlover = styled.View`
     align-items: center;
`;

export const Leftlover = styled.View`
     width: 80%;
     height: 100px;
     background: #F8D332;
     border-radius: 10px;
     padding: 15px 20px;
     margin-bottom: 20px;
`;

export const TitleLeftlover = styled.View`
     flex-direction: row;
     justify-content: space-between;
`;

export const TextLeftlover = styled.Text`
     font-size: 24px;
`;

export const MoneyLeftlover = styled.Text`
     font-size: 30px;
     text-align: center;
`;

export const ContainerScrolls = styled.ScrollView``;

export const Scroll = styled.View`
     margin-bottom: 20px;
`;

export const Title = styled.Text`
     font-size: 22px;
     padding-left: 20px;
`;

export const CardsContainer = styled.ScrollView.attrs({
     horizontal: true,
     showsHorizontalScrollIndicator: false,
})`
     padding: 0 10px;
`;

export const Card = styled.TouchableOpacity.attrs({
     activeOpacity: 1
})`
     width: 200px;
     height: 200px;
     background: #51B2BC;
     margin: 10px;
     border-radius: 13px;
     padding: 15px;

     justify-content: space-between;
`;

export const CardTitle = styled.Text`
     color: #fff;
     font-size: 20px;
     border: 3px solid #F8D332;
     border-top-width: 0;
     border-right-width: 0;
     border-left-width: 0;
`;

export const Chart = styled.View`
     width: 170px;
     height: 150px;

     justify-content: center;
     align-items: center;
`;

export const DebtTitleCard = styled.Text`
     font-size: 20px;
     color: #fff;
     margin-bottom: 10px;
`;

export const ValueCard = styled.Text`
     font-size: 20px;
     color: #fff;
     margin-bottom: 5px;
`;

export const DeadlineCard = styled.Text`
     font-size: 16px;
     color:rgba(255, 255, 255, 0.71);
     margin-bottom: 20px;
`;

export const ContainerProgressBar = styled.View`
     align-items: center;
`;

export const IconsCard = styled.View`
     flex-direction: row;
     justify-content: space-between;
`;