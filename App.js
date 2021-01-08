import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import InformationScreen from "./src/screens/InformationScreen";
import SearchScreen from "./src/screens/SearchScreen";
import ResultScreen from "./src/screens/ResultScreen";

const navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Information: InformationScreen,
    Search: SearchScreen,
    Result: ResultScreen,
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      title: "Tawsila",
      headerStyle: {
        backgroundColor: "#2C3E50",
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(navigator);
