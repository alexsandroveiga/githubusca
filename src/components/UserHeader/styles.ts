import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  margin: 16px 0;
`;

export const Header = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  width: 100%;
`;

export const Image = styled.Image`
  border-radius: 64px;
  width: 128px;
  height: 128px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 16px;
  justify-content: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Name = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 16px;
  color: #222;
`;

export const Bio = styled.Text`
  font-size: 12px;
  color: #222;
  margin-bottom: 4px;
  font-family: 'Inter-Regular';
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
  color: #222;
  font-family: 'Inter-Regular';
`;

export const InfoList = styled.View`
  flex-direction: row;
  background: #fff;
  border-radius: 8px;
  justify-content: space-between;
  padding: 16px;
`;

export const Info = styled.View`
  align-items: center;
`;

export const InfoText = styled.Text`
  text-transform: uppercase;
  font-size: 10px;
  font-family: 'Inter-Medium';
`;

export const InfoNumber = styled.Text`
  font-size: 24px;
  font-family: 'Inter-Bold';
`;
