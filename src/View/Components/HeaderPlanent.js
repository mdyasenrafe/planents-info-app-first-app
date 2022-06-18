import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { colors } from "../../Theme/Colors";
import { spacings } from "../../Theme/Spaceings";
import OwnText from "./Text/Text";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderPlanent = ({ backbutton }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {backbutton && (
        <Pressable
          style={{ marginRight: 10 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="left" size={24} color="white" />
        </Pressable>
      )}
      <OwnText preset="h2">The Planents</OwnText>
    </View>
  );
};

export default HeaderPlanent;

const styles = StyleSheet.create({
  container: {
    padding: spacings[5],
    borderBottomWidth: 0.2,
    borderBottomColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
});
