import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import CreatorMain from '../screens/CreatorMain';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <CreatorMain />
      </SafeAreaView>
    </>
  );
};

export default App;
