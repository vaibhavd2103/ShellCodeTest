import React, { Component } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";

export class TodaysOffer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let todaysoffer = [
      {
        name: "Chicken Boneless",
        img: {
          uri: "https://s3.ap-south-1.amazonaws.com/mumbai.urbanpiper.com/media/bizmedia/2020/09/23/Chicken_Thigh_Site_COMPRESSED.png",
        },
        id: "1",
        amt: "200",
        wt: "500",
        discount: "10",
      },
      {
        name: "Mutton Biryani Cut",
        img: {
          uri: "https://media.istockphoto.com/photos/variety-of-raw-black-angus-prime-meat-steaks-picture-id923692030?k=6&m=923692030&s=612x612&w=0&h=l4zOisv1id7AbouEaOln3Wt_8k7bPGR8ILlNMoNsHxU=",
        },
        id: "2",
        amt: "200",
        wt: "500",
        discount: "1",
      },
      {
        name: "Tiger Prawns",
        img: {
          uri: "https://ychef.files.bbci.co.uk/976x549/p091595d.jpg",
        },
        id: "3",
        amt: "200",
        wt: "500",
        discount: "10",
      },
      {
        name: "White Eggs",
        img: {
          uri: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
        },
        id: "4",
        amt: "200",
        wt: "500",
        discount: "1",
      },
    ];
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "black",

            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 20,
          }}
        >
          Today's Offer
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={todaysoffer}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity>
                <Surface style={styles.surface}>
                  <ImageBackground
                    style={{
                      width: 180,
                      height: 170,
                      borderRadius: 5,
                      padding: 3,
                    }}
                    source={item.img}
                  >
                    <View
                      style={{
                        backgroundColor: "brown",
                        borderRadius: 20,
                        width: 60,
                        height: 25,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ color: "white", fontSize: 17 }}>
                        -{item.discount}%
                      </Text>
                    </View>
                  </ImageBackground>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 19,
                      fontWeight: "600",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{ color: "brown", fontSize: 17, fontWeight: "700" }}
                  >
                    Rs. {item.amt}
                  </Text>
                  <Text
                    style={{ color: "grey", fontSize: 15, fontWeight: "bold" }}
                  >
                    Min Net wt. {item.wt} gms
                  </Text>
                </Surface>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

export default TodaysOffer;

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: "100%",
    padding: 10,
    backgroundColor: "white",
  },
  surface: {
    width: 200,
    padding: 5,
    margin: 3,
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    height: 275,
    backgroundColor: "white",
  },
});
