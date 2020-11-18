import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Header from '../../components/Header';
import ProfileCard from '../../components/ProfileCard';
import images from '../../assets';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
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
        source={images.profileBackGround}
        resizeMode="cover"
      >
        <Header />
        <ProfileCard />
      </ImageBackground>
    </View>
  );
}

export default Profile;
