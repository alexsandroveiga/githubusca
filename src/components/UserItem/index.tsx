import React, { useCallback, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Image,
  Content,
  Name,
  Location,
  LocationIcon,
  LocationText,
} from './styles';

interface IUser {
  id: number;
  name: string;
  login: string;
  location: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface IProps {
  item: IUser;
}

const UserItem: React.FC<IProps> = ({ item }) => {
  const navigation = useNavigation();

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    async function loadStorageUser(): Promise<void> {
      const recent = await AsyncStorage.getItem('users');

      if (recent) {
        setUsers(JSON.parse(recent));
      }
    }

    loadStorageUser();
  }, []);

  const handleNavigate = useCallback(
    async (user: IUser) => {
      const findUser = users.find((u) => u.login === user.login);

      if (findUser) {
        const userIndex = users.findIndex((u) => u.login === user.login);

        const usersList = users;

        usersList.splice(userIndex, 1);

        await AsyncStorage.setItem(
          'users',
          JSON.stringify([user, ...usersList]),
        );
      } else {
        await AsyncStorage.setItem('users', JSON.stringify([user, ...users]));
      }

      navigation.navigate('User', { user });
    },
    [navigation, users],
  );

  return (
    <Container
      key={item.id}
      onPress={() => {
        handleNavigate(item);
      }}
    >
      <Image
        source={{
          uri: item.avatar_url,
        }}
        resizeMode="cover"
      />
      <Content>
        <Name>{item.name ? item.name : item.login}</Name>
        {item.location && (
          <Location>
            <LocationIcon name="map-pin" size={12} color="#bbb" />
            <LocationText>{item.location}</LocationText>
          </Location>
        )}
      </Content>
    </Container>
  );
};

export default UserItem;
