import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled(FlatList)`
  flex: 1;
  background-color: #f4f4f4;
  padding: 0 16px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;
