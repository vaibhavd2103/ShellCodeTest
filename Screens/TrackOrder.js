import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Feather,
  Ionicons,
  Entypo,
  AntDesign,
} from "react-native-vector-icons";

const TrackOrder = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            width: "10%",
            justifyContent: "center",
            paddingLeft: 15,
            marginRight: 30,
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ width: "90%", justifyContent: "center" }}>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>
            Track Order
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          padding: 30,
          height: 400,
          backgroundColor: "white",
        }}
      >
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={styles.rndicon}>
            <AntDesign name="check" size={28} color="white" />
          </View>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={styles.textbold}>Order Recieved</Text>
            <Text style={styles.textbold}>14/05/2021</Text>
          </View>
        </View>
        <View style={{ height: 12, marginLeft: 8 }}>
          <Entypo name="dot-single" size={30} color="grey" />
        </View>
        <View style={{ height: 12, marginLeft: 8 }}>
          <Entypo name="dot-single" size={30} color="grey" />
        </View>
        <View style={{ height: 12, marginLeft: 8 }}>
          <Entypo name="dot-single" size={30} color="grey" />
        </View>
        <View style={{ height: 12, marginLeft: 8 }}>
          <Entypo name="dot-single" size={30} color="grey" />
        </View>
        <View style={{ flexDirection: "row", width: "100%", marginTop: 30 }}>
          <View style={styles.rndicon}>
            <Text style={styles.icontext}>2</Text>
          </View>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={styles.text}>Chicken Biryani Cut, Order Accepted</Text>
            <Text style={styles.text}>14/05/2021</Text>
          </View>
        </View>
        <View style={{ height: 12, marginLeft: 8 }}>
          <Entypo name="dot-single" size={30} color="grey" />
        </View>
        <View style={{ height: 12, marginLeft: 8 }}>
          <Entypo name="dot-single" size={30} color="grey" />
        </View>
        <View style={{ height: 12, marginLeft: 8 }}>
          <Entypo name="dot-single" size={30} color="grey" />
        </View>
        <View style={{ height: 12, marginLeft: 8 }}>
          <Entypo name="dot-single" size={30} color="grey" />
        </View>
        <View style={{ flexDirection: "row", width: "100%", marginTop: 30 }}>
          <View style={styles.rndicon}>
            <Text style={styles.icontext}>3</Text>
          </View>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={styles.text}>Chicken Boneless</Text>
            <Text style={styles.text}>14/05/2021</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#EC8238",
    height: 60,
    width: "100%",
    flexDirection: "row",
  },
  rndicon: {
    backgroundColor: "#F35A54",
    height: 45,
    width: 45,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textbold: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 17,
  },
  text: {
    color: "grey",
    fontWeight: "600",
    fontSize: 17,
  },
  icontext: {
    fontSize: 22,
    fontWeight: "600",
    color: "white",
  },
});
