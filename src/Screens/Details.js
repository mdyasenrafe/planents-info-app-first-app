import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Pressable,
  Linking,
} from "react-native";
import HeaderPlanent from "../View/Components/HeaderPlanent";
import PlanetSection from "../View/Components/PlanetSection";
import OwnText from "../View/Components/Text/Text";

const Details = ({ navigation, route }) => {
  const planet = route.params.planet;
  const {
    image,
    name,
    description,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
    wikiLink,
    structure,
    surface,
  } = planet;

  const handlePress = () => {
    Linking.openURL(wikiLink);
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <HeaderPlanent backbutton={true} />
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
        </View>
        <View style={styles.detailsView}>
          <OwnText style={styles.name} preset="h2">
            {name}
          </OwnText>
          <OwnText style={styles.description}>{description}</OwnText>
          <Pressable onPress={handlePress} style={styles.source}>
            <OwnText>Source : </OwnText>
            <OwnText preset="h4" style={styles.wikipedia}>
              {" "}
              Wikipedia
            </OwnText>
          </Pressable>
        </View>
        <View style={{ marginTop: 20 }}></View>
        <PlanetSection Title={"rotation time"} Value={rotationTime} />
        <PlanetSection Title={"revolution time"} Value={revolutionTime} />
        <PlanetSection Title={"radius"} Value={radius} />
        <PlanetSection Title={"avg Temp"} Value={avgTemp} />
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 30,
  },
  imageView: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "stretch",
  },
  detailsView: {
    marginHorizontal: 20,
    marginTop: 30,
    alignItems: "center",
  },
  name: {
    textTransform: "uppercase",
  },
  description: {
    marginTop: 10,
    textAlign: "center",
    lineHeight: 28,
  },
  source: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  wikipedia: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
