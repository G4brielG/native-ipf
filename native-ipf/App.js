import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login } from './src/screens';
import { NativeBaseProvider } from "native-base";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navigator>
          <Screen name="Login" component={Login} />
          <Screen name="Home" component={Home} />
        </Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
