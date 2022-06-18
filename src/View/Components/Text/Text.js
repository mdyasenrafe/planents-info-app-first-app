import React from "react";
import { Text as RNText, StyleSheet } from "react-native";
import { Presets } from "./TextPreset";

const OwnText = ({ children, preset = "default", style }) => {
  const textStyles = StyleSheet.compose(Presets[preset], style);
  return <RNText style={textStyles}>{children}</RNText>;
};

export default OwnText;
