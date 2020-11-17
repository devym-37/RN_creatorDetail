import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Profile from '../Profile/Profile';
import CreatorInfo from '../CreatorInfo/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

function CreatorMain() {
  return (
    <View style={styles.container}>
      <Profile />
      <CreatorInfo />
    </View>
  );
}

export default CreatorMain;
