import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import images from '../assets/index';

const styles = StyleSheet.create({
  contents: {
    height: 260,
  },
  stretchContents: {
    height: 300,
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
  tagContainer: {
    marginBottom: 10,
    marginRight: 5,
    fontSize: 12,
    paddingRight: 4,
    paddingLeft: 4,
    paddingTop: 4,
    paddingBottom: 3,
    borderRadius: 3,
    backgroundColor: '#f3f3f3',
  },
  tagText: {
    color: '#777777',
    fontSize: 12,
  },
  likeButton: {
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
  },
  subButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#dddddd',
    height: 34,
    borderRadius: 5,
    borderWidth: 1,
  },
  youtubeIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
    marginLeft: 22,
  },
  triangleButton: {
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    marginBottom: 10,
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 3,
  },
});

const renderTagItem = (tag, index) => {
  return (
    <View style={styles.tagContainer} key={index}>
      <Text style={styles.tagText}>{tag}</Text>
    </View>
  );
};

const ProfileCard = ({ profile }) => {
  const { name, profile_path, biography, place_of_birth } = profile;
  const splitBirth = place_of_birth.split(',').slice(0, 3);

  return (
    <View
      style={biography.length === 0 ? styles.contents : styles.stretchContents}
    >
      <View style={styles.profile}>
        <View style={{ marginTop: 40, alignItems: 'center' }}>
          <Text style={{ marginBottom: 10, backgroundColor: '#fff' }}>
          <Text>{console.log('profile', profile)}</Text>
            {name}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.likeButton}
              onPress={() => {
                Alert.alert('찜하기');
              }}
            >
              <Text style={{ color: '#fff' }}>찜하기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subButton}
              onPress={() => {
                Alert.alert('구독하기');
              }}
            >
              <Image
                style={styles.youtubeIcon}
                source={images.youtubeIcon}
                sizeMode="cover"
              />
              <Text style={{ paddingRight: 22 }}>구독</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ marginBottom: 10, marginRight: 20, marginLeft: 20 }}>
            {biography.length === 0
              ? null
              : biography.length > 80
              ? `${biography.slice(0, 80)}...`
              : biography}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            {splitBirth.length !== 0
              ? splitBirth.map((tag, index) => renderTagItem(tag, index))
              : null}

            <View style={styles.triangleButton}>
              <Image
                style={{ width: 8, height: 8, alignItems: 'center' }}
                source={images.triangleMoreButton}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.img}
        source={{ uri: `http://image.tmdb.org/t/p/w300${profile_path}` }}
        resizeMode="cover"
      />
    </View>
  );
};

export default ProfileCard;
