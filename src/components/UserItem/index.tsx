import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../hooks/search';

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
  login: string;
  name: string;
  avatar_url: string;
  location: string;
}

interface IProps {
  user: IUser;
}

const UserItem: React.FC<IProps> = ({ user }) => {
  const { addUser } = useUser();
  const navigation = useNavigation();

  function handleNavigate(): void {
    addUser(user);
    navigation.navigate('User', { user });
  }

  return (
    <Container onPress={() => handleNavigate()}>
      <Image source={{ uri: user.avatar_url }} resizeMode="cover" />
      <Content>
        <Name>{user.name ? user.name : user.login}</Name>
        {user.location && (
          <Location>
            <LocationIcon name="map-pin" size={12} color="#bbb" />
            <LocationText>{user.location}</LocationText>
          </Location>
        )}
      </Content>
    </Container>
  );
};

export default UserItem;
