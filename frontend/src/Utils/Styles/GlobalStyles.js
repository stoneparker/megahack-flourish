import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  }))`
  margin-top: 50px
  `;

export const Title = styled.Text`
	font-size: 20px;
    color: #4F4F4F;
    width: 90%;
    margin-bottom: 4px;
`;

export const Label = styled.Text`
	font-size: 16px;
    color: #5F5F5F;
    margin-bottom: 10px;
    margin-top: 10px;
`;
