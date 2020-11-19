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

function Profile({profile}) {
  const [loading, setLoading] = useState(false);
  const [creator, setCreator] = useState(null);


  useEffect(() => {
    if(profile){
      setLoading(true);
      setCreator(profile);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImg}
        source={images.profileBackGround}
        resizeMode="cover"
      >
        <Header />
        {loading && creator !== null ? <ProfileCard profile={creator} /> : null}
      </ImageBackground>
    </View>
  );
}

export default Profile;
