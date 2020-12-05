import React, { useState } from "react";
import { StyleSheet, View, Text, Image, PixelRatio } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function RatingStars(props) {
  const [defaultRating, setDefaultRating] = useState(props.stars);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const starImageFilled = (
    <FontAwesome
      style={{ marginRight: 5 }}
      name="star"
      size={PixelRatio.get() <= 1.5 ? 20 : 22}
      color="#FED500"
    />
  );
  const starImageEmpty = (
    <FontAwesome
      style={{ marginRight: 5 }}
      name="star-o"
      size={PixelRatio.get() <= 1.5 ? 20 : 22}
      color="#92A6B0"
    />
  );
  const starImageHalf = (
    <FontAwesome
      style={{ marginRight: 5 }}
      name="star-half-empty"
      size={PixelRatio.get() <= 1.5 ? 20 : 22}
      color="#FED500"
    />
  );

  return (
    <View style={styles.ratingWrapper}>
      {maxRating.map((item, key) => {
        if (item <= defaultRating) {
          return <View key={item}>{starImageFilled}</View>;
        } else if (item > defaultRating && item - defaultRating < 1) {
          return <View key={item}>{starImageHalf}</View>;
        } else return <View key={item}>{starImageEmpty}</View>;
      })}
      <Text style={styles.rating}>{props.stars}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingWrapper: {
    flexDirection: "row",
    paddingTop: 5,
    alignItems: "center",
  },
  rating: {
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
    color: "#92A6B0",
    paddingLeft: 5,
  },
});
