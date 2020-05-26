import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';

import Routes from './routes';
import AppContainer from './hooks';

const App: React.FC = () => (
  <AppContainer>
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Routes />
    </View>
  </AppContainer>
);

export default App;
