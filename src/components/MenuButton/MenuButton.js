import React from "react";
import { TouchableHighlight, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default function MenuButton(props) {
  const { title, onPress, source, buttonStyle, textStyle } = props;

  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.btnClickContain, buttonStyle]}  // Aplica o buttonStyle aqui
      underlayColor="rgba(128, 128, 128, 0.1)"
    >
      <View style={styles.btnContainer}>
        <Image source={source} style={styles.btnIcon} />
        {/* A string 'title' deve estar dentro do componente Text */}
        <Text style={[styles.btnText, textStyle]}>
          {title} {/* Isso está correto, pois está dentro do <Text> */}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

MenuButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string.isRequired,
  buttonStyle: PropTypes.object,  // Nova prop para buttonStyle
  textStyle: PropTypes.object,    // Nova prop para textStyle
};
