import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Everton Carvalho</Text>
      <Button
        title="Malcolm X"
        onPress={() => navigation.navigate('ImageScreen')}
      />
    </View>
  );
}

function ImageScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Malcolm X</Text>
      <Button
        title="Everton Carvalho"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <Image source={require('./assets/malcolm_x.jpeg')} style={{ margin: 10, width: 500, height: 500 }}/>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;