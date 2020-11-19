import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tagContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    borderWidth: 1,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 5,
    marginRight: 8,
    backgroundColor: '#f3f3f3',
  },
});

const CreatorTagCard = () => {
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.tagText}>test</Text>
    </View>
  );
};

export default CreatorTagCard;
