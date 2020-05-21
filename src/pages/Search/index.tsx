/* eslint-disable no-throw-literal */
import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

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

  const [user, setUser] = useState<IUser>();
  const [recentUsers, setRecentUsers] = useState<IUser[]>([]);
  const [newUser, setNewUser] = useState('');

  const loadStorageUser = useCallback(async () => {
    const recent = await AsyncStorage.getItem('users');

    if (recent) {
      setRecentUsers(JSON.parse(recent));
    } else {
      setRecentUsers([]);
    }
  }, []);

  const cleanStorage = useCallback(async () => {
    await AsyncStorage.removeItem('users');
    loadStorageUser();
  }, [loadStorageUser]);

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

  useEffect(() => {
    loadStorageUser();
  }, [loadStorageUser]);

  useEffect(
    () =>
      navigation.addListener('focus', () => {
        loadStorageUser();
        setUser(undefined);
      }),
    [navigation, loadStorageUser],
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

        <SearchContainer showsVerticalScrollIndicator={false}>
          {newUser !== '' && user && <UserItem key={user.id} item={user} />}

          {recentUsers.length > 0 && newUser === '' && (
            <RecentSearchesBar>
              <RecentSearchesText>Buscas recentes</RecentSearchesText>
              <RecentSearchesButton onPress={() => cleanStorage()}>
                <RecentSearchesText>Limpar</RecentSearchesText>
              </RecentSearchesButton>
            </RecentSearchesBar>
          )}

          {recentUsers.length > 0 &&
            newUser === '' &&
            recentUsers.map((item) => <UserItem key={item.id} item={item} />)}
        </SearchContainer>
      </Container>
    </>
  );
};

export default Search;
