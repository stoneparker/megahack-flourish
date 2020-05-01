import styled from 'styled-components/native';
import Constants from 'expo-constants';


// .attrs({
//      contentContainerStyle: {
//           flexGrow: 1,
//           alignItems: 'center',
//      }
// })`

export const Container = styled.View`
     flex: 1;
     /* align-items: center; */
     padding-top: ${Constants.statusBarHeight + 20}px;
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
 
export const Text = styled.Text`
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

export const TextLeftlover = styled.Text`
     font-size: 24px;
`;

export const MoneyLeftlover = styled.Text`
     font-size: 30px;
     text-align: right;
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
`;

export const CardTitle = styled.Text`
     color: #fff;
     font-size: 20px;
     border: 3px solid #F8D332;
     border-top-width: 0;
     border-right-width: 0;
     border-left-width: 0;
`;