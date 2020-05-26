import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { Container, Content, Logo, Title, Footer, Overlay } from './styles';

const Main: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Container
        source={{
          uri:
            'https://i.pinimg.com/originals/5b/38/53/5b3853c01be59decc69c7496d1d3fe9f.png',
        }}
      >
        <Content>
          <Logo>GITHUBusca</Logo>
          <Title onPress={() => navigation.navigate('Search')}>
            digite o usuário aqui
          </Title>
        </Content>
        <Footer>&copy; 2020 Alexsandro Veiga</Footer>
        <Overlay />
      </Container>
    </>
  );
};

export default Main;
