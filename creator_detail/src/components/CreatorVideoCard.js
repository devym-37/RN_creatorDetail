import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 288,
    marginRight: 18,
    marginLeft: 18,
    marginBottom: 23,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoProfile: {
    marginRight: 8,
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 38,
    height: 38,
  },
  mainImage: {
    height: 180,
    backgroundColor: 'green',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderColor: '#dddddd',
    borderWidth: 1,
  },
  subContainer: {
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: '#dddddd',
    borderWidth: 1,
    height: 60,
    paddingRight: 10,
    paddingLeft: 10,
  },

  subImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CreatorVideoCard = ({ creatorInfo }) => {
  const {
    vote_count,
    original_title,
    release_date,
    poster_path,
    backdrop_path,
  } = creatorInfo[0];

  return (
    <View style={styles.container}>
      {/* image and profile */}
      <View style={styles.infoHeader}>
        <Image
          style={styles.infoProfile}
          source={{ uri: `http://image.tmdb.org/t/p/w300${poster_path}` }}
          resizeMode="cover"
        />

        <View>
          <Text>{original_title}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{ fontSize: 13, color: '#999999' }}
            >{`조회수 ${vote_count} · ${release_date}`}</Text>
          </View>
        </View>
      </View>
      {/* image */}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          Alert.alert('main image');
        }}
      >
        <Image
          style={styles.mainImage}
          source={{ uri: `http://image.tmdb.org/t/p/w300${poster_path}` }}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View style={styles.subContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.subImage}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                Alert.alert('sub image');
              }}
            >
              <Image
                style={{ height: 40, width: 40, marginRight: 10 }}
                source={{
                  uri: `http://image.tmdb.org/t/p/w300${backdrop_path}`,
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                Alert.alert('sub image');
              }}
            >
              <Image
                style={{ height: 40, width: 40, marginRight: 10 }}
                source={{
                  uri: `http://image.tmdb.org/t/p/w300${backdrop_path}`,
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                Alert.alert('sub image');
              }}
            >
              <Image
                style={{ height: 40, width: 40, marginRight: 10 }}
                source={{
                  uri: `http://image.tmdb.org/t/p/w300${backdrop_path}`,
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                Alert.alert('sub image');
              }}
            >
              <Image
                style={{ height: 40, width: 40, marginRight: 10 }}
                source={{
                  uri: `http://image.tmdb.org/t/p/w300${backdrop_path}`,
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                Alert.alert('sub image');
              }}
            >
              <Image
                style={{ height: 40, width: 40, marginRight: 10 }}
                source={{
                  uri: `http://image.tmdb.org/t/p/w300${backdrop_path}`,
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                Alert.alert('sub image');
              }}
            >
              <Image
                style={{ height: 40, width: 40, marginRight: 10 }}
                source={{
                  uri: `http://image.tmdb.org/t/p/w300${backdrop_path}`,
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                Alert.alert('sub image');
              }}
            >
              <Image
                style={{ height: 40, width: 40, marginRight: 10 }}
                source={{
                  uri: `http://image.tmdb.org/t/p/w300${backdrop_path}`,
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                Alert.alert('sub image');
              }}
            >
              <Image
                style={{ height: 40, width: 40, marginRight: 10 }}
                source={{
                  uri: `http://image.tmdb.org/t/p/w300${backdrop_path}`,
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                Alert.alert('sub image');
              }}
            >
              <Image
                style={{ height: 40, width: 40, marginRight: 10 }}
                source={{
                  uri: `http://image.tmdb.org/t/p/w300${backdrop_path}`,
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                Alert.alert('sub image');
              }}
            >
              <Image
                style={{ height: 40, width: 40, marginRight: 10 }}
                source={{
                  uri: `http://image.tmdb.org/t/p/w300${backdrop_path}`,
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CreatorVideoCard;
