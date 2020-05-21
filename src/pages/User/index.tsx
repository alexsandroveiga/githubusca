import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, View, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import UserHeader from '../../components/UserHeader';
import RepositoryItem from '../../components/RepositoryItem';

import { Container, Loading } from './styles';

import api from '../../services/api';

type RootStackParamList = {
  User: { user: IUser };
  Repository: { repository: IRepository };
};

type Props = StackScreenProps<RootStackParamList, 'User'>;

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

interface IRepository {
  id: number;
  name: string;
  html_url: string;
  language: string;
  description: string;
  created_at: string;
  pushed_at: string;
}

const User: React.FC<Props> = ({ route, navigation }: Props) => {
  const { user } = route.params;

  navigation.setOptions({
    title: user.login,
  });

  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const loadRepositories = useCallback(async () => {
    setLoading(true);

    const response = await api.get(
      `/users/${user.login}/repos?per_page=10&page=${page}`,
    );

    setLoading(false);

    if (response.data.length === 0) return;

    console.log(`Página: ${page}`);

    setRepositories((prevState) => {
      if (page === 1) {
        return response.data;
      }
      return [...prevState, ...response.data];
    });
    setRefreshing(false);
  }, [page, user]);

  const handleLoadMore = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const refreshList = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    loadRepositories();
    setRefreshing(false);
  }, [loadRepositories]);

  useEffect(() => {
    loadRepositories();
  }, [loadRepositories]);

  return (
    <Container>
      <FlatList
        data={repositories}
        renderItem={({ item }) => <RepositoryItem item={item} />}
        keyExtractor={(item) => String(item.id)}
        onRefresh={refreshList}
        refreshing={refreshing}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          handleLoadMore();
        }}
        onEndReachedThreshold={0.2}
        ListFooterComponent={loading ? <Loading /> : <View />}
        ListHeaderComponent={<UserHeader item={user} />}
      />
    </Container>
  );
};

export default User;
