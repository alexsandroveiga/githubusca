import React from 'react';
import { StatusBar } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';

import { Container, BackButton, Icon, Title } from './styles';

const Header: React.FC<StackHeaderProps> = ({ navigation, scene }) => {
  const { title } = scene.descriptor.options;

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Container>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="chevron-left" size={20} />
        </BackButton>
        <Title>{title}</Title>
      </Container>
    </>
  );
};

export default Header;
