import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

const StatusBarMargin = (StatusBar.currentHeight as number) + 16;

export const Container = styled.ImageBackground`
  flex: 1;
  padding-top: ${StatusBarMargin}px;
`;

export const Overlay = styled.View`
  background: rgba(49, 53, 61, 0.7);
  position: absolute;
  top: 0;
  z-index: 1;
  height: 200%;
  width: 100%;
  left: 0;
`;

export const Content = styled.View`
  margin: 0;
  position: absolute;
  top: 50%;
  width: 100%;
`;

export const Logo = styled.Text`
  color: #fff;
  border-bottom-width: 1px;
  border-color: rgba(255, 255, 255, 0.2);
  padding-bottom: 16px;
  margin: 0 16px 16px 16px;
  font-family: 'Poppins-SemiBold';
  z-index: 2;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: 'Poppins-Bold';
  z-index: 2;
  color: #77caee;
  align-self: flex-end;
  margin-right: 16px;
`;

export const Footer = styled.Text`
  position: absolute;
  bottom: 16px;
  align-self: center;
  color: #fff;
  font-size: 12px;
  font-family: 'Inter-Regular';
  z-index: 2;
  color: #fff;
`;
