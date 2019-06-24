import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import BlogScreen from "../screens/BlogScreen";
import SelectedBlogScreen from "../screens/SelectedBlogScreen";

const AppNavigator = createStackNavigator(
  {
    Home: BlogScreen,
    SelectedBlog: SelectedBlogScreen
  },
  {
    mode: "modal"
  }
);

export default createAppContainer(AppNavigator);
