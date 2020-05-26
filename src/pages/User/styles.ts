import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

export const Container = styled(FlatList)<FlatListProps>`
  flex: 1;
  background-color: #f4f4f4;
  padding: 0 16px;
`;

export const RepositoryList = styled.ScrollView`
  margin-top: 16px;
  width: 100%;
  padding-bottom: 16px;
`;

export const RepositoryItem = styled.TouchableOpacity`
  background-color: #31353d;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
`;

export const Name = styled.Text`
  font-family: 'Inter-Bold';
  color: #fff;
`;

export const Description = styled.Text`
  font-family: 'Inter-Regular';
  color: #e0e0e0;
  font-size: 12px;
  margin-bottom: 16px;
`;

export const Language = styled.Text`
  background: #445878;
  color: #fff;
  padding: 4px;
  position: absolute;
  top: 16px;
  right: 16px;
  justify-content: center;
  font-family: 'Inter-Medium';
  text-transform: uppercase;
  font-size: 10px;
`;

export const DateList = styled.Text``;

export const Date = styled.Text`
  font-size: 10px;
  color: #fff;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;
