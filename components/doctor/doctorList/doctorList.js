import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  PixelRatio,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function DoctorList(props) {
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      key={index}
      style={styles.listBox}
      onPress={() =>
        props.navigation.navigate("DoctorDetail", {
          id: item.DocId,
        })
      }
    >
      <Image
        source={{
          uri: `data:image/png;base64,${item.Photo}`,
        }}
        style={styles.image}
      />
      <View style={styles.listInfoWrapper}>
        <View style={styles.listInfo}>
          <View>
            <Text style={styles.name}>{item.FullName}</Text>
            <Text style={styles.speciality}>{item.Specs}</Text>
          </View>
          <View style={styles.ratingWrapper}>
            <AntDesign
              name="star"
              size={PixelRatio.get() <= 1.5 ? 22 : 24}
              color="#FED500"
            />
            <Text style={styles.rating}>{item.Stars}</Text>
          </View>
        </View>
        <View style={styles.location}>
          <SimpleLineIcons name="location-pin" size={22} color="#92A6B0" />
          <Text style={styles.address}>{item.Address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      style={styles.listWrapper}
      data={props.doctors}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
const styles = StyleSheet.create({
  listWrapper: {
    paddingLeft: "4%",
    paddingRight: "4%",
    marginTop: "5%",
  },
  listBox: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    height: 110,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    marginBottom: "5%",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 50,
    alignSelf: "center",
  },
  listInfoWrapper: {
    paddingLeft: "5%",
  },
  listInfo: {
    flexDirection: "row",
  },
  name: {
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
    fontWeight: "500",
  },
  speciality: {
    color: "#08DA5F",
    fontStyle: "italic",
    fontSize: PixelRatio.get() <= 1.5 ? 14 : 16,
  },
  location: {
    flexDirection: "row",
    paddingTop: 5,
  },
  address: {
    fontSize: PixelRatio.get() <= 1.5 ? 14 : 16,
    color: "#92A6B0",
    alignSelf: "flex-end",
    paddingLeft: 5,
  },
  ratingWrapper: {
    flexDirection: "row",
    paddingLeft: "10%",
  },
  rating: {
    fontSize: PixelRatio.get() <= 2 ? 16 : 18,
    color: "#92A6B0",
    paddingLeft: "2.5%",
  },
});
