import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Header from '../../components/Header';
import ProfileCard from '../../components/ProfileCard';
import images from '../../assets';
import { getDataApi } from '../../api';

const styles = StyleSheet.create({
  container: {

  },
  backgroundImg: {
    width: '100%',

  },
});

function Profile() {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    const { data } = await getDataApi.profile();
    console.log('result', data);
    setLoading(true);
    setProfile(data);
  };

  useEffect(() => {
    getProfile();
  }, []);
  console.log('profile', profile);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImg}
        source={images.profileBackGround}
        resizeMode="cover"
      >
        <Header />
        {loading && profile !== null ? <ProfileCard profile={profile} /> : null}
      </ImageBackground>
    </View>
  );
}

export default Profile;
