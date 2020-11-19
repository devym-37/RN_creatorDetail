import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import CreatorMain from '../screens/CreatorMain';

import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="CreatorMain"
              component={CreatorMain}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <CreatorMain />
      </SafeAreaView> */}
    </>
  );
};

export default App;
