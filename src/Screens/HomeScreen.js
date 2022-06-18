import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  Pressable,
  TextInput,
} from "react-native";
import { PLANET_LIST } from "../Data/Data";
import { colors } from "../Theme/Colors";
import HeaderPlanent from "../View/Components/HeaderPlanent";
import OwnText from "../View/Components/Text/Text";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [list, setList] = React.useState(PLANET_LIST);

  const handleSearch = (text) => {
    const newList = PLANET_LIST.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setList(newList);
  };
  return (
    <View style={styles.mainContainer}>
      <HeaderPlanent />
      <View>
        <TextInput
          placeholder="Type the planet name"
          placeholderTextColor={colors.white}
          autoCorrect={false}
          style={styles.searchInput}
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
      <FlatList
        data={list}
        contentContainerStyle={styles.list}
        keyExtractor={(item, index) => item.name}
        renderItem={({ item, index }) => {
          const { name, color } = item;
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("Details", { planet: item });
              }}
              style={styles.item}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={[styles.circle, { backgroundColor: color }]} />
                <OwnText preset="h4" style={styles.itemName}>
                  {name}
                </OwnText>
              </View>
              <View>
                <AntDesign name="right" size={18} color="white" />
              </View>
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 30,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  itemName: {
    textTransform: "uppercase",
  },
  list: {
    padding: 15,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 20,
  },
  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.white,
  },
  searchInput: {
    borderBottomWidth: 1,
    padding: 8,
    borderColor: colors.white,
    color: colors.white,
    margin: 20,
  },
});
