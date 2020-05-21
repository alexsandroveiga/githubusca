import styled from 'styled-components/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { StatusBar } from 'react-native';

export const Container = styled.View`
  margin-top: ${StatusBar.currentHeight}px;
  background: #fff;
  border-bottom-width: 1px;
  border-color: #e0e0e0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 16px;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 4px;
  opacity: 1;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #222;
  font-family: 'Inter-Bold';
  text-transform: lowercase;
  margin-right: 16px;
`;
