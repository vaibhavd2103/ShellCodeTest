import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";

export class Categories extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let categories = [
      {
        name: "Chicken",
        img: {
          uri: "https://s3.ap-south-1.amazonaws.com/mumbai.urbanpiper.com/media/bizmedia/2020/09/23/Chicken_Thigh_Site_COMPRESSED.png",
        },
        id: "1",
      },
      {
        name: "Meat",
        img: {
          uri: "https://media.istockphoto.com/photos/variety-of-raw-black-angus-prime-meat-steaks-picture-id923692030?k=6&m=923692030&s=612x612&w=0&h=l4zOisv1id7AbouEaOln3Wt_8k7bPGR8ILlNMoNsHxU=",
        },
        id: "2",
      },
      {
        name: "Fish",
        img: {
          uri: "https://ychef.files.bbci.co.uk/976x549/p091595d.jpg",
        },
        id: "3",
      },
      {
        name: "Egg",
        img: {
          uri: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
        },
        id: "4",
      },
      {
        name: "Marinades",
        img: {
          uri: "https://www.jessicagavin.com/wp-content/uploads/2018/07/chicken-marinade-5-1200.jpg",
        },
        id: "5",
      },
      {
        name: "Combos",
        img: {
          uri: "https://s3.ap-south-1.amazonaws.com/mumbai.urbanpiper.com/media/bizmedia/l/2021/03/25/IMG_9191-SEL_C2_450PIX_COMPRESSED.jpg",
        },
        id: "6",
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
          }}
        >
          Top Categories
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={categories}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity>
                <Surface style={styles.surface}>
                  <Image
                    style={{ width: 180, height: 170, borderRadius: 5 }}
                    source={item.img}
                  />
                  <Text
                    style={{
                      color: "black",
                      fontSize: 16,
                      fontWeight: "700",
                      marginBottom: 20,
                    }}
                  >
                    {item.name}
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

export default Categories;

const styles = StyleSheet.create({
  container: {
    height: 280,
    width: "100%",
    padding: 10,
    backgroundColor: "white",
  },
  surface: {
    width: 200,
    padding: 5,
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
  },
});
