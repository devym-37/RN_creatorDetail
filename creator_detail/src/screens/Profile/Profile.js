import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import Header from '../../components/Header';
import ProfileCard from '../../components/ProfileCard';

const styles = StyleSheet.create({
  container: {
    height: 330,
    backgroundColor: 'green',
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
  },
});

function Profile() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImg}
        source={require('../../assets/rectangle.png')}
        resizeMode="cover"
      >
        <Header />
        <ProfileCard />
      </ImageBackground>
    </View>
  );
}

export default Profile;
