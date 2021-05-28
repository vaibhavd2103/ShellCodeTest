import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import {
  Feather,
  Ionicons,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "react-native-vector-icons";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const CheckOut = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            width: "10%",
            justifyContent: "center",
            paddingLeft: 15,
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{ width: "70%", justifyContent: "center", paddingLeft: 15 }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>
            Checkout
          </Text>
        </View>
        <View
          style={{
            width: "20%",
            justifyContent: "space-between",
            paddingRight: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name="login" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons name="cart" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Card elevation={20} style={styles.card}>
        <View style={{ flex: 1, paddingTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              paddingHorizontal: 10,
            }}
          >
            <Image
              source={{
                uri: "https://5.imimg.com/data5/QT/LN/GLADMIN-7351739/chicken-boneless-small-pcs-500x500.png",
              }}
              style={{ width: 100, height: 100, borderRadius: 5 }}
            />
            <View>
              <Title
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#646464",
                  marginLeft: 15,
                }}
              >
                Chicken Boneless
              </Title>
              <Text style={styles.orderinfo}>500 gms</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.orderinfo}>Rs. 180</Text>
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid",
                    color: "red",
                    fontWeight: "600",
                    marginLeft: 15,
                    fontSize: 20,
                  }}
                >
                  Rs. 200
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Card>
      <View
        style={{
          flexDirection: "row",
          marginTop: 300,
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
          paddingRight: 10,
        }}
      >
        <TextInput
          placeholder="Enter Coupon code"
          placeholderTextColor="darkgrey"
          style={styles.input}
        />
        <View style={styles.apply}>
          <TouchableOpacity>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
              Apply
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#646464",
            marginLeft: 100,
          }}
        >
          Subtotal :{" "}
        </Text>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}> Rs. 180</Text>
      </View>
      <View style={{ flexDirection: "row", width: "100%", marginTop: 10 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#646464",
            marginLeft: 137,
          }}
        >
          Total :{" "}
        </Text>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}> Rs. 180</Text>
      </View>
      <TouchableOpacity style={styles.placeorder}>
        <Text style={{ fontSize: 18, color: "white", fontWeight: "700" }}>
          PLACE ORDER
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    backgroundColor: "#EC8238",
    height: 60,
    width: "100%",
    flexDirection: "row",
  },
  card: {
    width: "80%",
    height: 120,
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 10,
  },
  image: {
    height: 100,
    width: 100,
  },
  orderinfo: {
    color: "grey",
    fontWeight: "600",
    marginLeft: 15,
    fontSize: 20,
  },
  apply: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F44233",
    height: 50,
    width: 100,
  },
  input: {
    width: "75%",
    backgroundColor: "white",
    height: 40,
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 60,
  },
  placeorder: {
    height: 50,
    width: 300,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F44233",
    marginTop: 5,
  },
});
