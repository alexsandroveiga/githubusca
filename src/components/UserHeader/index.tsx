import React from 'react';

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

interface User {
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

interface UserItemProps {
  item: User;
}

const UserHeader: React.FC<UserItemProps> = ({ item }) => {
  return (
    <Container>
      <Header>
        <Image
          source={{
            uri: item.avatar_url,
          }}
          resizeMode="cover"
        />
        <Content>
          <Name>{item.name ? item.name : item.login}</Name>
          {item.bio && <Bio>{item.bio}</Bio>}
          {item.location && (
            <Location>
              <LocationIcon name="map-pin" size={14} color="#bbb" />
              <LocationText>{item.location}</LocationText>
            </Location>
          )}
        </Content>
      </Header>
      <InfoList>
        <Info>
          <InfoNumber>{item.public_repos}</InfoNumber>
          <InfoText>Repositórios</InfoText>
        </Info>
        <Info>
          <InfoNumber>{item.followers}</InfoNumber>
          <InfoText>Seguidores</InfoText>
        </Info>
        <Info>
          <InfoNumber>{item.following}</InfoNumber>
          <InfoText>Seguindo</InfoText>
        </Info>
      </InfoList>
    </Container>
  );
};

export default UserHeader;
