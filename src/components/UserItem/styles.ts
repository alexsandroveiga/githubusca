import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  background: #f8f8f8;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const Image = styled.Image`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 64px;
  height: 64px;
  background: #31353d;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 16px;
  justify-content: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Name = styled.Text`
  font-family: 'Inter-SemiBold';
  font-size: 16px;
  line-height: 18px;
  color: #31353d;
`;

export const Location = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LocationIcon = styled(FeatherIcon)`
  margin-right: 4px;
  opacity: 1;
`;

export const LocationText = styled.Text`
  font-size: 12px;
  line-height: 16px;
  font-family: 'Inter-Regular';
  color: #31353d;
`;
