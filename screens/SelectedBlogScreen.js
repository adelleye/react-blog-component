import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Button
} from "react-native";
import { Dimensions } from "react-native";
import styled from "styled-components";
import { Icon } from "expo";

class BlogScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <ScrollView />
      </Container>
    );
  }
}

export default SelectedBlogScreen;
const ScreenWidth = Dimensions.get("window").width;
