import React from 'react';
import { useNavigation } from '@react-navigation/native';

import formatDate from '../../utils/formatDate';

import {
  Container,
  Name,
  Description,
  Language,
  DateList,
  Date,
  DateText,
  DateNumber,
} from './styles';

interface IRepository {
  name: string;
  html_url: string;
  language: string;
  description: string;
  created_at: string;
  pushed_at: string;
}

interface IProps {
  item: IRepository;
}

const RepositoryItem: React.FC<IProps> = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Container
      onPress={() => {
        navigation.navigate('Repository', { item });
      }}
    >
      <Name>{item.name}</Name>
      {item.description && <Description>{item.description}</Description>}
      {item.language && <Language>{item.language}</Language>}

      <DateList>
        <Date>
          <DateText>Criação</DateText>
          <DateNumber>{formatDate(item.created_at)}</DateNumber>
        </Date>
        <Date>
          <DateText>Último push</DateText>
          <DateNumber>{formatDate(item.pushed_at)}</DateNumber>
        </Date>
      </DateList>
    </Container>
  );
};

export default RepositoryItem;
