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
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action };
}

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

class BlogScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <ScrollView>
          <TitleOfPage>Hello world</TitleOfPage>
        </ScrollView>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(BlogScreen);

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const TitleOfPage = styled.Text`
  font-size: 34px;
  font-weight: 700;
  color: #1d1d26;
`;
