import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 44,
    justifyContent: 'center',
    backgroundColor: 'white',
    opacity: 0.5,
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;
