import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  Entypo,
} from "react-native-vector-icons";
import CarouselCardItem from "../Carousel/CarouselCardItem";
import CarouselCards from "../Carousel/CarouselCards";
import { DrawerContent } from "../Drawer/DrawerContent";
import Categories from "../Home/Categories";
import SpecialProducts from "../Home/SpecialProducts";
import TodaysOffer from "../Home/TodaysOffer";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Feather name="menu" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <MaterialCommunityIcons name="cart" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ height: 225, width: "100%", backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            justifyContent: "flex-end",
            height: 40,
            paddingRight: 5,
            flexDirection: "row",
          }}
        >
          <Entypo name="location-pin" size={24} color="#EC8238" />
          <Text style={{ fontWeight: "bold", marginTop: 5 }}>
            Check Delivery Pincode
          </Text>
        </View>
        <CarouselCards />
      </View>
      <ScrollView>
        <Categories navigation={props.navigation} />
        <SpecialProducts navigation={props.navigation} />
        <TodaysOffer navigation={props.navigation} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#EC8238",
  },
  header: {
    backgroundColor: "#EC8238",
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  headertext: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
