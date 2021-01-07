import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import InformationScreen from "./src/screens/InformationScreen";

const navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Information: InformationScreen,
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
