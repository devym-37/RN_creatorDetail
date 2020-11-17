import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header';

const styles = StyleSheet.create({
  container: {
    height: 330,
    backgroundColor: 'green',
  },
});

function Profile() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

export default Profile;
