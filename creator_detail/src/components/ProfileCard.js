import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import images from '../assets/index';

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    height: 330,
  },
  profile: {
    flex: 1,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 40,
    marginTop: 52,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
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
        <View style={{ marginTop: 40, alignItems: 'center' }}>
          <Text style={{ marginBottom: 10, backgroundColor: '#fff' }}>크리에이터 이름</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                marginBottom: 20,
                paddingRight: 25,
                paddingLeft: 25,
                paddingTop: 7,
                paddingBottom: 7,
                borderRadius: 5,
                backgroundColor: '#f917f9',
                marginRight: 8,
                height: 34,
                justifyContent: 'center',
              }}
              onPress={() => {
                Alert.alert('찜하기');
              }}
            >
              <Text style={{ color: '#fff' }}>찜하기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContents: 'center',
                alignItems: 'center',
                borderColor: '#dddddd',
                height: 34,
                borderRadius: 5,
                borderWidth: 1,
              }}
              onPress={() => {
                Alert.alert('구독하기');
              }}
            >
              <Image
                style={{ width: 16, height: 16, marginRight: 4, marginLeft: 22 }}
                source={images.youtubeIcon}
                sizeMode="cover"
              />
              <Text style={{ paddingRight: 22 }}>구독</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ marginBottom: 10 }}>소개글</Text>
          <Text style={{ marginBottom: 10 }}>태그 정보</Text>
        </View>
      </View>
      <View style={styles.img} />
    </View>
  );
};

export default ProfileCard;
