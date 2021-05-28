import React from "react";
import { View, StyleSheet, Alert, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer, Text } from "react-native-paper";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  Entypo,
  Foundation,
} from "react-native-vector-icons";
import { TouchableOpacity } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "#F4843F" }}>
      <DrawerContentScrollView {...props}>
        {/* -------------------------Drawer Content-------------------------------- */}
        <View style={styles.drawerContent}>
          {/* -------------------------Image-------------------------------- */}
          <View style={styles.imagesection}>
            <Image
              source={require("../assets/shell.jpg")}
              style={{ height: 170, width: 220 }}
              mode="contain"
            />
          </View>
          {/* -------------------------Drawer Section-------------------------------- */}
          <Drawer.Section style={styles.section}>
            {/* -------------------------Home-------------------------------- */}
            <DrawerItem
              icon={({}) => (
                <View style={{ width: "100%", flexDirection: "row" }}>
                  <Entypo name="home" color="black" size={24} />
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontSize: 17,
                      marginLeft: 13,
                    }}
                  >
                    Home
                  </Text>
                </View>
              )}
              label=""
              pressColor="orange"
              activeBackgroundColor="orange"
              activeTintColor="orange"
              style={{}}
              onPress={() => props.navigation.navigate("Home")}
            />
            {/* -------------------------MyProfile-------------------------------- */}
            <DrawerItem
              icon={({}) => (
                <View style={{ width: "100%", flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    name="account"
                    size={26}
                    color="black"
                  />
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontSize: 17,
                      marginLeft: 11,
                    }}
                  >
                    My Profile
                  </Text>
                </View>
              )}
              label=""
              pressColor="orange"
              style={{}}
              onPress={() => {}}
            />
            {/* -------------------------My Orders-------------------------------- */}
            <DrawerItem
              icon={({}) => (
                <View style={{ width: "100%", flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    name="login-variant"
                    size={24}
                    color="black"
                  />
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontSize: 17,
                      marginLeft: 13,
                    }}
                  >
                    My Orders
                  </Text>
                </View>
              )}
              label=""
              pressColor="orange"
              style={{}}
              onPress={() => {}}
            />
            {/* -------------------------About Us-------------------------------- */}
            <DrawerItem
              icon={({}) => (
                <View style={{ width: "100%", flexDirection: "row" }}>
                  <Foundation name="info" color="black" size={26} />
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontSize: 17,
                      marginLeft: 19,
                    }}
                  >
                    About Us
                  </Text>
                </View>
              )}
              label=""
              pressColor="orange"
              style={{}}
              onPress={() => {}}
            />
            {/* -------------------------Privacy Policy-------------------------------- */}
            <DrawerItem
              icon={({}) => (
                <View style={{ width: "100%", flexDirection: "row" }}>
                  <MaterialIcons name="privacy-tip" color="black" size={24} />
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontSize: 17,
                      marginLeft: 15,
                    }}
                  >
                    Privacy Policy
                  </Text>
                </View>
              )}
              label=""
              pressColor="orange"
              style={{}}
              onPress={() => {}}
            />
            {/* -------------------------Contact Us-------------------------------- */}
            <DrawerItem
              icon={({}) => (
                <View style={{ width: "100%", flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    name="contacts"
                    color="black"
                    size={24}
                  />
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontSize: 17,
                      marginLeft: 15,
                    }}
                  >
                    Contact Us
                  </Text>
                </View>
              )}
              label=""
              pressColor="orange"
              style={{}}
              onPress={() => {}}
            />
            {/* -------------------------Set Password------------------------------- */}
            <DrawerItem
              icon={({}) => (
                <View style={{ width: "100%", flexDirection: "row" }}>
                  <MaterialCommunityIcons name="key" color="black" size={26} />
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontSize: 17,
                      marginLeft: 13,
                    }}
                  >
                    Set Password
                  </Text>
                </View>
              )}
              label=""
              pressColor="orange"
              style={{}}
              onPress={() => {}}
            />
            {/* -------------------------Login------------------------------- */}
            <DrawerItem
              icon={({}) => (
                <View style={{ width: "100%", flexDirection: "row" }}>
                  <MaterialIcons name="login" color="black" size={24} />
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontSize: 17,
                      marginLeft: 15,
                    }}
                  >
                    Login
                  </Text>
                </View>
              )}
              label=""
              pressColor="orange"
              style={{}}
              onPress={() => {}}
            />
            {/* -------------------------logout------------------------------- */}
            <DrawerItem
              icon={({}) => (
                <View style={{ width: "100%", flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    name="login-variant"
                    color="black"
                    size={24}
                  />
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontSize: 17,
                      marginLeft: 15,
                    }}
                  >
                    Logout
                  </Text>
                </View>
              )}
              label=""
              pressColor="orange"
              style={{}}
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: "white",
    height: 1000,
  },
  imagesection: {
    flexDirection: "row",
    backgroundColor: "#F4843F",
    justifyContent: "center",
    height: 200,
  },
  section: {},
  clearcache: {},
});
