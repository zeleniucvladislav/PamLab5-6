import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Image,
  PixelRatio,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "../../navbar";
import { SimpleLineIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";
import * as Location from "expo-location";
import * as SecureStore from "expo-secure-store";
import RatingStars from "../../helpers/ratingStars";

export default function DoctorDetail({
  route,
  navigation,
  navigation: { goBack },
}) {
  const [doctor, setDoctor] = useState({});
  const [loading, setLoading] = useState(true);
  const [locationCoords, setLocationCoords] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });
  const { id } = route.params;

  useEffect(() => {
    setLoading(true);
    fetchDoctor();
  }, [id]);
  const fetchDoctor = async () => {
    const token = await SecureStore.getItemAsync("token");
    axios
      .get(`https://pam.cybersnets.com/api/Doctor/GetDoctor/${id}`, {
        headers: { token: JSON.parse(token) },
      })
      .then((response) => {
        setDoctor(response.data);
        getLocation(response.data.Address);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
        console.log(error);
      });
  };

  const getLocation = async (address) => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    try {
      let location = await Location.geocodeAsync(JSON.stringify(address));
      setLocationCoords({
        ...locationCoords,
        latitude: location[0].latitude,
        longitude: location[0].longitude,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#08DA5F" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => goBack()}>
          <Ionicons name="md-arrow-back" size={25} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Doctor Details</Text>
      </View>
      <ScrollView style={styles.doctorWrapper}>
        {loading ? (
          <View style={styles.loadingWrapper}>
            <ActivityIndicator size="large" color="#08DA5F" />
          </View>
        ) : (
          <>
            <View style={styles.doctorInfo}>
              <Image
                source={{
                  uri: `data:image/png;base64,${doctor.Photo}`,
                }}
                style={styles.image}
              />
              <View style={styles.listInfo}>
                <Text style={styles.name}>{doctor.FullName}</Text>
                <Text style={styles.speciality}>{doctor.Specs}</Text>
                <RatingStars stars={doctor.Stars} />
              </View>
            </View>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.label}>Short Description</Text>
              <Text style={styles.descriptionText}>{doctor.About}</Text>
            </View>
            <View style={styles.locationWrapper}>
              <Text style={styles.label}>Location</Text>
              <View style={styles.locationTextWrapper}>
                <SimpleLineIcons
                  name="location-pin"
                  size={22}
                  color="#92A6B0"
                />
                <Text style={styles.locationText}>{doctor.Address}</Text>
              </View>
            </View>
            <MapView style={styles.mapStyle} region={locationCoords}>
              <Marker
                pinColor="#08DA5F"
                coordinate={{
                  latitude: locationCoords.latitude,
                  longitude: locationCoords.longitude,
                }}
              />
            </MapView>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                navigation.navigate("Notification", {
                  doctorData: doctor,
                })
              }
            >
              <Text style={styles.btnText}>Request</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#08DA5F",
    width: "100%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  backBtn: {
    position: "absolute",
    left: 15,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
  },
  doctorWrapper: {
    marginTop: "5%",
    marginBottom: "5%",
    paddingLeft: "6%",
    paddingRight: "6%",
  },
  doctorInfo: {
    flexDirection: "row",
    paddingBottom: "5%",
    borderBottomWidth: 1,
    borderBottomColor: "#EBEFF2",
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 50,
    alignSelf: "center",
  },
  listInfo: {
    paddingLeft: 20,
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
  ratingWrapper: {
    flexDirection: "row",
    paddingTop: 5,
  },
  rating: {
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
    color: "#92A6B0",
    paddingLeft: 5,
  },
  descriptionWrapper: {
    marginTop: "10%",
  },
  label: {
    color: "#37474E",
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
    fontWeight: "900",
  },
  descriptionText: {
    color: "#92A6B0",
    lineHeight: 22,
    paddingRight: 55,
    paddingTop: "3%",
    fontSize: PixelRatio.get() <= 1.5 ? 14 : 16,
  },
  locationWrapper: {
    marginTop: "13%",
  },
  locationTextWrapper: {
    marginTop: "3%",
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "#92A6B0",
    fontSize: PixelRatio.get() <= 1.5 ? 14 : 16,
    paddingLeft: 10,
  },
  btn: {
    backgroundColor: "#07DA5F",
    marginTop: "8%",
    marginBottom: "5%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
  },
  mapStyle: {
    width: "100%",
    height: 200,
    marginTop: "5%",
  },
  loadingWrapper: {
    flex: 1,
    marginTop: "70%",
  },
});
