import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImageSelector(props) {
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      quality: 0.1,
      aspect: [4, 3],
    });

    if (pickerResult.cancelled === true) {
      return;
    }

    props.setImage(pickerResult.base64);
    setSelectedImage({ localUri: pickerResult.uri });
  };
  const image =
    selectedImage !== null
      ? { uri: selectedImage.localUri }
      : require("../../../static/images/photo.png");
  return (
    <View>
      <TouchableOpacity onPress={() => openImagePickerAsync()}>
        <Image source={image} style={styles.photoImg} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  photoImg: {
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});
