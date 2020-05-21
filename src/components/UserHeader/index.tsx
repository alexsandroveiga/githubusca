import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import {
  Container,
  Header,
  Image,
  Content,
  Name,
  Bio,
  Location,
  LocationIcon,
  LocationText,
  InfoList,
  Info,
  InfoNumber,
  InfoText,
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

interface IProps {
  item: IUser;
}

const UserHeader: React.FC<IProps> = ({ item }) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    async function loadUser(): Promise<void> {
      const response = await api.get(`/users/${item.login}`);
      setUser(response.data);
    }

    loadUser();
  }, [item]);

  return (
    <Container>
      <Header>
        <Image
          source={{
            uri: user.avatar_url,
          }}
          resizeMode="cover"
        />
        <Content>
          <Name>{user.name ? user.name : user.login}</Name>
          {user.bio && <Bio>{user.bio}</Bio>}
          {user.location && (
            <Location>
              <LocationIcon name="map-pin" size={14} color="#bbb" />
              <LocationText>{user.location}</LocationText>
            </Location>
          )}
        </Content>
      </Header>
      <InfoList>
        <Info>
          <InfoNumber>{user.public_repos}</InfoNumber>
          <InfoText>Repositórios</InfoText>
        </Info>
        <Info>
          <InfoNumber>{user.followers}</InfoNumber>
          <InfoText>Seguidores</InfoText>
        </Info>
        <Info>
          <InfoNumber>{user.following}</InfoNumber>
          <InfoText>Seguindo</InfoText>
        </Info>
      </InfoList>
    </Container>
  );
};

export default UserHeader;
