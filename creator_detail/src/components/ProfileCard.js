import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contents: {
    flex: 1,
  },
  profile: {
    flex: 1,
    backgroundColor: 'yellow',
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 40,
    marginTop: 52,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 50,
    position: 'absolute',
    alignSelf: 'center',
  },
});

const ProfileCard = () => {
  return (
    <View style={styles.contents}>
      <View style={styles.profile}>
        <Text>크리에이터 이름</Text>
        <Text>구독 버튼 </Text>
        <Text>소개글</Text>
        <Text>태그 정보</Text>
      </View>
      <View style={styles.img} />
    </View>
  );
};

export default ProfileCard;
