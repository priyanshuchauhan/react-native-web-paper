import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';

import * as React from "react";
import { useWindowDimensions, StyleSheet, Text, View } from "react-native";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Button } from "react-native-paper";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MyDrawer() {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen
        name="HomeStack"
        component={HomeScreenStack}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Details"
        component={DetailsScreen}
        options={{ drawerLabel: 'Details' }}
      />
    </Drawer.Navigator>
  );
}

function HomeScreenStack({}) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Details")}
      >
        Go to Details
      </Button>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello there!</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Navigation;
