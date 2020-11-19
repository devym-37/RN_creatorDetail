import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import Profile from '../Profile/Profile';
import CreatorInfo from '../CreatorInfo/index';
import SubHeader from '../../components/SubHeader.js';

import { getDataApi } from '../../api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function CreatorMain() {
  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    const { data } = await getDataApi.profile();
    setProfile(data);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <View style={styles.container}>
      {profile !== null ? (
        <>
          <SubHeader profile={profile} />
          <Profile profile={profile} />
        </>
      ) : null}

      <CreatorInfo />
    </View>
  );
}

export default CreatorMain;
