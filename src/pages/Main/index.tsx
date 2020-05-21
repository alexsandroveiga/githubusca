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
          uri: 'https://blog.atom.io/img/posts/github-for-atom.png',
        }}
        imageStyle={{
          width: 1560, // the image height
          left: undefined,
        }}
      >
        <Content>
          <Logo>GITHUBusca</Logo>
          <Title onPress={() => navigation.navigate('Search')}>
            digite o usuário aqui
          </Title>
        </Content>
        <Footer>&copy; 2020 Agência Clicksoft</Footer>
        <Overlay />
      </Container>
    </>
  );
};

export default Main;
