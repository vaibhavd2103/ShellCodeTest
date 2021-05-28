import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import {
  Feather,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

const ProductList = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
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
        <View style={{ width: "80%", justifyContent: "center" }}></View>
        <View style={{ width: "10%", justifyContent: "center" }}>
          <MaterialCommunityIcons name="cart" size={30} color="white" />
        </View>
      </View>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {/* --------------------------------------Chicken Boneless--------------------------------------- */}
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
                style={{ width: 100, height: 100 }}
              />
              <View>
                <Title
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "black",
                    marginLeft: 15,
                  }}
                >
                  Chicken Boneless
                </Title>
                <Text style={styles.orderinfo}>Rs. 200</Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: "grey",
                    marginLeft: 15,
                  }}
                >
                  Min Net wt. 500 gms
                </Text>
              </View>
            </View>
          </View>
        </Card>
        {/* --------------------------------------Chicken Biryani Cut--------------------------------------- */}
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
                style={{ width: 100, height: 100 }}
              />
              <View>
                <Title
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "black",
                    marginLeft: 15,
                  }}
                >
                  Chicken Biryani Cut
                </Title>
                <Text style={styles.orderinfo}>Rs. 150</Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: "grey",
                    marginLeft: 15,
                  }}
                >
                  Min Net wt. 500 gms
                </Text>
              </View>
            </View>
          </View>
        </Card>
        {/* --------------------------------------Chicken Drumstick--------------------------------------- */}
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
                style={{ width: 100, height: 100 }}
              />
              <View>
                <Title
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "black",
                    marginLeft: 15,
                  }}
                >
                  Chicken Drumstick
                </Title>
                <Text style={styles.orderinfo}>Rs. 200</Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: "grey",
                    marginLeft: 15,
                  }}
                >
                  Min Net wt. 500 gms
                </Text>
              </View>
            </View>
          </View>
        </Card>
        {/* --------------------------------------Chicken Mince/Keema--------------------------------------- */}
        <Card elevation={20} style={styles.card}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                paddingHorizontal: 10,
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://5.imimg.com/data5/QT/LN/GLADMIN-7351739/chicken-boneless-small-pcs-500x500.png",
                }}
                style={{ width: 100, height: 100 }}
              />
              <View>
                <Title
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "black",
                    marginLeft: 15,
                  }}
                >
                  Chicken Mince/
                </Title>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "black",
                    marginLeft: 15,
                  }}
                >
                  Keema
                </Text>
                <Text style={styles.orderinfo}>Rs. 200</Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: "grey",
                    marginLeft: 15,
                  }}
                >
                  Min Net wt. 500 gms
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffff",
    paddingBottom: 50,
    paddingTop: 40,
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
  button: {
    height: 35,
    width: 100,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
    borderColor: "grey",
  },
  buttontext: {
    color: "#EC8238",
    fontWeight: "700",
    fontSize: 16,
  },
});
