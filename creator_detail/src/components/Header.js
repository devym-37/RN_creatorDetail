import React from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import images from '../assets/index';

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 18,
    marginRight: 18,
  },
  partnerBtn: {
    marginRight: 15,
    fontSize: 14,
    lineHeight: 18,
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ffffff',
    color: '#ffffff',
  },
  buttonImg: {
    width: 24,
    height: 24,
  },
  moreBtn: {
    width: 22,
    height: 22,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('back button');
        }}
      >
        <Image style={styles.buttonImg} source={images.profileBackButton} resizeMode="cover" />
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Partner Regist');
          }}
        >
          <Text style={styles.partnerBtn}>파트너 등록</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Alert.alert('More Info Button');
          }}
        >
          <Image style={styles.moreBtn} source={images.profileMoreButton} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
