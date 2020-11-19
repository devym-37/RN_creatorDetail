import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import images from '../assets/index';

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
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
  img: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});

const SubHeader = ({profile}) => {
  const { name, profile_path } = profile;
  console.log('profile', profile)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('back button');
        }}
        style={{marginRight: 5}}
      >
        <Image
          style={styles.buttonImg}
          source={images.subHeaderBackBtn}
          resizeMode="cover"
        />
      </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('More Info Button');
          }}
          style={{marginRight: 10}}
        >
          <Image
            style={styles.img}
            source={{
              uri: `http://image.tmdb.org/t/p/w300/${profile_path}`,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      <Text>{name}</Text>
    </View>
  );
};

export default SubHeader;
