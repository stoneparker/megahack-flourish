import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding-top: 5px;
`;

export const Title = styled.Text`
	font-size: 20px;
    color: #4F4F4F;
    margin-bottom: 2%;
    padding-right: 50%;
`;

export const Viewer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const NextButton = styled.TouchableOpacity`
    border-radius: 30px;
    width: 90%;
    height: 50px;
    background: #79C255;
    margin-bottom: 15%;
`;