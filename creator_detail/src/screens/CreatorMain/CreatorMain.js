import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Text, SafeAreaView } from 'react-native';

import Profile from '../Profile/Profile';
import CreatorInfo from '../CreatorInfo/index';
import SubHeader from '../../components/SubHeader.js';

import { getDataApi } from '../../api';

const HEADER_MAX_HEIGHT = 400;
const HEADER_MIN_HEIGHT = 120;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    overflow: 'hidden',
  },
  subHeaderContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: -100,
    left: 0,
    right: 0,
    alignItems: 'flex-end',
    paddingBottom: 10,
    height: 144,
    backgroundColor: '#fff',
  },
});

function CreatorMain() {
  const [profile, setProfile] = useState(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.1, 0],
    extrapolate: 'clamp',
  });

  const convertImageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const getProfile = async () => {
    const { data } = await getDataApi.profile();
    setProfile(data);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT - 44 }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          // event.nativeEvent.contentOffset.x to scrollX
          { useNativeDriver: true }, // use native driver for animation
        )}
        showsVerticalScrollIndicator={false}
      >
        <CreatorInfo />
      </Animated.ScrollView>
      {profile !== null ? (
        <>
          <Animated.View
            style={[
              styles.profileContainer,
              {
                opacity: imageOpacity,
                transform: [{ translateY: headerTranslateY }],
              },
            ]}
          >
            <Profile profile={profile} />
          </Animated.View>
          <Animated.View
            style={[
              styles.subHeaderContainer,
              {
                opacity: convertImageOpacity,
                transform: [{ translateY: titleTranslateY }],
              },
            ]}
          >
            <SubHeader profile={profile} />
          </Animated.View>
        </>
      ) : null}
    </SafeAreaView>
  );
}

export default CreatorMain;
