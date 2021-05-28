import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Screens/Home";
import { DrawerContent } from "./Drawer/DrawerContent";
import Settings from "./Screens/Settings";
import ProductDetails from "./Screens/ProductDetails";
import MyOrders from "./Screens/MyOrders";
import ProductList from "./Screens/ProductList";
import TrackOrder from "./Screens/TrackOrder";
import CheckOut from "./Screens/CheckOut";
import Cart from "./Screens/Cart";
import SpecialProducts from "./Home/SpecialProducts";
import CarouselCards from "./Carousel/CarouselCards";
import CarouselCardItem from "./Carousel/CarouselCardItem";

const Stack = createStackNavigator();

export default function App() {
  return <Home />;
}

/* 
(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
*/
