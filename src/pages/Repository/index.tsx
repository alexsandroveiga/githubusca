import React from 'react';
import { WebView } from 'react-native-webview';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  Repository: { item: IRepositoryProps };
};

interface IRepositoryProps {
  name: string;
  html_url: string;
}

const Repository: React.FC<StackScreenProps<
  RootStackParamList,
  'Repository'
>> = ({ route, navigation }) => {
  const { item: repository } = route.params;

  navigation.setOptions({
    title: repository.name,
  });

  return <WebView source={{ uri: repository.html_url }} />;
};

export default Repository;
