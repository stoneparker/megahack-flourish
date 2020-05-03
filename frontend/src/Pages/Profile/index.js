import React from 'react';
import { View, Text } from 'react-native';
import { Title, Container, ProfileBox, SubTitle, FieldTitle } from '../Profile/styles';


export default function Profile() {
  return (
    <Container>
    
         <Title>Seu perfil</Title>
         <SubTitle style={{width: 300, marginRight: 30}}>Carlinhos Beira Mar, 24 anos</SubTitle>
    
         <FieldTitle>Email:</FieldTitle>
         <ProfileBox><Text style={{textAlign: "center", color: "white", fontSize: 20, top: 25}}>carlos@hotmail.com</Text></ProfileBox>

         <FieldTitle>Senha:</FieldTitle>
         <ProfileBox><Text style={{textAlign: "center", color: "white", fontSize: 20, top: 25}}>****************</Text></ProfileBox>

         <FieldTitle>Renda média mensal:</FieldTitle>
         <ProfileBox><Text style={{textAlign: "center", color: "white", fontSize: 20, top: 25}}>R$ 3.456,00</Text></ProfileBox>

         <FieldTitle>Gênero:</FieldTitle>
         <ProfileBox><Text style={{textAlign: "center", color: "white", fontSize: 20, top: 25}}>Masculino</Text></ProfileBox>
        
    

    </Container>
  );
}
