import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../Theme/Colors";
import OwnText from "./Text/Text";

const PlanetSection = ({ Title, Value }) => {
  return (
    <View style={styles.planetSection}>
      <OwnText preset="small" style={styles.Title}>
        {Title}
      </OwnText>
      <OwnText preset="h2">{Value}</OwnText>
    </View>
  );
};

export default PlanetSection;

const styles = StyleSheet.create({
  planetSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  Title: {
    textTransform: "uppercase",
  },
});
