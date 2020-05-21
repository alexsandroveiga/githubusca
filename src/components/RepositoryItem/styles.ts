import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: #31353d;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
`;

export const Name = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 16px;
  color: #fff;
`;

export const Description = styled.Text`
  font-family: 'Inter-Regular';
  color: #e0e0e0;
  font-size: 12px;
`;

export const Language = styled.Text`
  background: #445878;
  color: #fff;
  padding: 0 8px;
  position: absolute;
  top: 8px;
  right: 8px;
  justify-content: center;
  font-family: 'Inter-SemiBold';
  text-transform: uppercase;
  font-size: 9px;
  border-radius: 8px;
  line-height: 16px;
`;

export const DateList = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;
  border-top-width: 1px;
  border-color: #333;
  padding-top: 16px;
`;

export const Date = styled.View`
  align-items: center;
  flex: 1;
`;

export const DateText = styled.Text`
  font-size: 10px;
  color: #fff;
  font-family: 'Inter-SemiBold';
  text-transform: uppercase;
`;

export const DateNumber = styled.Text`
  font-size: 12px;
  color: #fff;
`;
