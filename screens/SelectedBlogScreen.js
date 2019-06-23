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

class SelectedBlogScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <ScrollView>
          <Text>Section Screen</Text>
        </ScrollView>
      </Container>
    );
  }
}

export default SelectedBlogScreen;
const ScreenWidth = Dimensions.get("window").width;

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;
