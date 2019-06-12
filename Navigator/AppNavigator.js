import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import CampaignScreen from "../screens/CampaignScreen";
import TabNavigator from "./TabNavigator";
import BlogScreen from "../screens/BlogScreen";

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
