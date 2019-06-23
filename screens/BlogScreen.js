import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Button,
  FlatList,
  View,
  StyleSheet,
  Text,
  Image
} from "react-native";
import { Dimensions } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";
import blogData from "../data/blogData";

function mapStateToProps(state) {
  return { action: state.action };
}

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

class FlatListItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.ImageContainer}>
            <View style={styles.ImageCover}>
              <Image
                source={this.props.item.firstImage}
                style={styles.FirstImage}
              />
            </View>
          </View>

          <Text style={styles.titleOfBlog}>{this.props.item.titleOfBlog}</Text>
          <Text style={styles.writeUp}>{this.props.item.writeUp}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class BlogScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <ScrollView>
          <TitleOfPage>Hello world</TitleOfPage>

          <View style={styles.container}>
            <FlatList
              data={blogData}
              renderItem={({ item, index }) => {
                return <FlatListItem item={item} index={index} />;
              }}
            />
          </View>
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
  margin-top: 60px;
  font-size: 34px;
  font-weight: 700;
  color: #1d1d26;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },

  titleOfBlog: {
    marginTop: 5,
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "400",
    color: "#1d1d26",
    width: Dimensions.get("window").width - 40
  },

  writeUp: {
    marginTop: 5,
    marginLeft: 20,
    fontSize: 14,
    fontWeight: "300",
    color: "#1d1d26",
    width: Dimensions.get("window").width - 40,
    height: 40
  },
  ImageContainer: {
    marginLeft: 20,
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").width - 40
  },

  ImageCover: {
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").width - 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },

  FirstImage: {
    width: screenWidth - 40,
    height: screenWidth - 40
  }
});
