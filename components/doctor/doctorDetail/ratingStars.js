import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  PixelRatio,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function RatingStars(props) {
  const [defaultRating, setDefaultRating] = useState(props.stars);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const starImageFilled = (
    <AntDesign
      style={{ marginRight: 5 }}
      name="star"
      size={PixelRatio.get() <= 1.5 ? 20 : 22}
      color="#FED500"
    />
  );
  const starImageEmpty = (
    <AntDesign
      style={{ marginRight: 5 }}
      name="staro"
      size={PixelRatio.get() <= 1.5 ? 20 : 22}
      color="#92A6B0"
    />
  );

  return (
    <View style={styles.ratingWrapper}>
      {maxRating.map((item, key) => {
        return item <= defaultRating ? starImageFilled : starImageEmpty;
      })}
      <Text style={styles.rating}>{props.stars}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingWrapper: {
    flexDirection: "row",
    paddingTop: 5,
  },
  rating: {
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
    color: "#92A6B0",
    paddingLeft: 5,
  },
});
