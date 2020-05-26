/* eslint-disable no-throw-literal */
import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar, Alert, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import { useUser } from '../../hooks/search';

import UserItem from '../../components/UserItem';

import {
  Container,
  SearchBar,
  InputContainer,
  Icon,
  Input,
  BackButton,
  BackButtonText,
  SearchContainer,
  RecentSearchesBar,
  RecentSearchesText,
  RecentSearchesButton,
} from './styles';

interface IUser {
  id: number;
  name: string;
  login: string;
  location: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

const Search: React.FC = () => {
  const navigation = useNavigation();
  const { users, cleanStorage } = useUser();
  const [user, setUser] = useState<IUser>();
  const [newUser, setNewUser] = useState('');

  const handleFindUser = useCallback(async () => {
    try {
      const response = await api.get(`/users/${newUser}`);

      setUser(response.data);
    } catch {
      Alert.alert(
        'Erro',
        `O usuário ${newUser} não foi encontrado em nossa base de dados`,
        [
          {
            text: 'OK',
            onPress: () => {
              setNewUser('');
              setUser(undefined);
            },
          },
        ],
        { cancelable: false },
      );
    }
  }, [newUser]);

  useEffect(
    () =>
      navigation.addListener('focus', () => {
        setUser(undefined);
      }),
    [navigation],
  );

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Container>
        <SearchBar>
          <InputContainer>
            <Icon name="search" size={20} color="#bbb" />
            <Input
              placeholder="Adicionar usuário"
              value={newUser}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(value) => {
                setNewUser(value);
              }}
              onSubmitEditing={handleFindUser}
            />
          </InputContainer>

          <BackButton onPress={() => navigation.goBack()}>
            <BackButtonText>Voltar</BackButtonText>
          </BackButton>
        </SearchBar>

        <ScrollView
          style={{
            flex: 1,
            width: '100%',
          }}
          showsVerticalScrollIndicator={false}
        >
          <SearchContainer>
            {newUser !== '' && user && <UserItem key={user.id} user={user} />}

            {users.length > 0 && newUser === '' && (
              <RecentSearchesBar>
                <RecentSearchesText>Buscas recentes</RecentSearchesText>
                <RecentSearchesButton onPress={() => cleanStorage()}>
                  <RecentSearchesText>Limpar</RecentSearchesText>
                </RecentSearchesButton>
              </RecentSearchesBar>
            )}

            {users.length > 0 &&
              newUser === '' &&
              users.map((item) => <UserItem key={item.login} user={item} />)}
          </SearchContainer>
        </ScrollView>
      </Container>
    </>
  );
};

export default Search;
