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

export const Content = styled.View`
     justify-content: center;
     align-items: center;

     background: #fff;
     /* padding: 20px 40px; */
     /* height: 100px; */
     width: 90%;
     padding: 20px;
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

export const Field = styled.View`
     width: 100%;

     justify-content: center;
     align-items: center;
`;

export const Label = styled.Text`
     font-size: 18px;
     color: rgba(0, 0, 0, 0.8);
     margin-bottom: 5px;
`;

export const Input = styled.TextInput`
     width: 100%;
     height: 40px;
     color: #fff;
     text-align: center;
     margin-bottom: 17px;
     background: #51B2BC;
     border-radius: 30px;
`;

export const ListPicker = styled.View`
     width: 100%;
     height: 40px;
     background: #51B2BC;
     border-radius: 30px;
     justify-content: center;
     padding: 0 10px;
     margin-bottom: 17px;
`;

export const Picker = styled.Picker`
     color: #fff;
     font-family: 'Fredoka One';
     justify-content: center;
     align-items: center;
`;

export const Options = styled.View`
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     
     width: 90%;
`;

export const BtnCancel = styled.TouchableOpacity``;

export const TextBtnCancel = styled.Text`
     font-size: 13px;
     color: rgba(79, 79, 79, 0.54);
`;

export const BtnNext = styled.TouchableOpacity`
     background: #79C255;
     padding: 13px 20px;
     border-radius: 20px;
`;

export const TextBtnNext = styled.Text`
     color: #fff;
     letter-spacing: 1.3px;
     font-size:  15px;
`;
