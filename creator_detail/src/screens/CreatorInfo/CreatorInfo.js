import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import CreatorVideoCard from '../../components/CreatorVideoCard';
import { getDataApi } from '../../api';
import { renderer } from 'react-test-renderer';
import CreatorTagCard from '../../components/CreatorTagCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

const LIMIT = 20;

const PICKER = {
  first: '인기순',
  second: '최신순',
  third: '조회수',
};

function CreatorInfo() {
  const [initLoading, setInitLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [creatorInfo, setCreatorInfo] = useState([]);
  const topScroll = useRef(null);

  const getInfo = async (page) => {
    setLoading(true);
    if (page > 10) {
      setLoading(false);
    } else {
      const {
        data: { results },
      } = await getDataApi.dataList(page);
      setCreatorInfo([...creatorInfo, ...results]);
      setOffset(offset + LIMIT);
      setLoading(false);
      setPage(page + 1);
    }
  };

  const renderKeyExtractor = useCallback((item, index) => {
    return index.toString();
  }, []);

  const renderOnEndReached = () => {
    if (loading) {
      return null;
    } else {
      getInfo(page);
    }
  };

  const renderItem = (item) => {
    return <CreatorVideoCard creatorInfo={item} />;
  };

  const scrollToTop = () => {
    return topScroll.current.scrollToOffset({
      offset: 0,
      animated: true,
    });
  };

  useEffect(() => {
    getInfo(page);
    setInitLoading(true);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{`${creatorInfo.length} 개 page: ${page}`}</Text>
      {/* 상단 태그 스크롤 */}
      <View
        style={{
          height: 58,
          // backgroundColor: 'red',
          marginLeft: 18,
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            width: 71,
            // backgroundColor: 'green',
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',

            
          }}
        >
          {/* <Picker
            selectedValue={`${PICKER.first}`}
            style={{ height: 50, width: 100 }}
            // onValueChange={(itemValue, itemIndex) =>
            //   this.setState({language: itemValue})
            // }
          >
            <Picker.Item label={`${PICKER.first}`} value="first" />
            <Picker.Item
              label={`${PICKER.second}`}
              value="second"
            />
            <Picker.Item label={`${PICKER.third}`} value={`${PICKER.third}`} />
          </Picker> */}
          <Text style={{            borderWidth: 1,
            borderRadius: 5,
            }}>인기순</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <CreatorTagCard />
          <CreatorTagCard />
          <CreatorTagCard />
          <CreatorTagCard />
          <CreatorTagCard />
          <CreatorTagCard />
          <CreatorTagCard />
          <CreatorTagCard />
        </ScrollView>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={{ height: 20 }}
        onPress={() => scrollToTop()}
      ></TouchableOpacity>
      {!initLoading ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#f917f9" />
        </View>
      ) : (
        <Animated.FlatList
          ref={topScroll}
          data={creatorInfo}
          keyExtractor={renderKeyExtractor}
          renderItem={renderItem}
          onEndReached={renderOnEndReached}
          onEndReachedThreshold={1}
          ListFooterComponent={
            loading && <ActivityIndicator size="large" color="#f917f9" />
          }
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* <CreatorVideoCard /> */}
    </View>
  );
}

export default CreatorInfo;
