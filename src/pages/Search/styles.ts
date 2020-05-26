import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { StatusBar } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const StatusBarMargin = (StatusBar.currentHeight as number) + 16;

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const SearchBar = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #ddd;
  padding: ${StatusBarMargin}px 16px 16px 16px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 25px;
  height: 50px;
  border-width: 2px;
  background: #f8f8f8;
  padding: 0 16px;
  flex: 1;
  border-color: #ddd;
`;

export const Input = styled.TextInput`
  font-family: 'Inter-Medium';
  font-size: 14px;
  width: auto;
  flex: 1;
  color: #444;
`;

export const BackButton = styled.TouchableOpacity`
  margin-left: 16px;
  padding: 14px 0;
`;

export const BackButtonText = styled.Text`
  font-family: 'Inter-Bold';
  text-transform: uppercase;
  color: #31353d;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
  opacity: 1;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled.View`
  width: 100%;
  padding: 16px 16px 0 16px;
`;

export const RecentSearchesBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RecentSearchesText = styled.Text`
  font-family: 'Inter-Bold';
  text-transform: uppercase;
  color: #31353d;
  margin-bottom: 4px;
  font-size: 12px;
`;

export const RecentSearchesButton = styled.TouchableOpacity``;
