import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import YourLists from "./screens/YourLists";
import CreateListModal from "./screens/modals/CreateListModal";
import Todo from "./screens/Todo";

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: "#FFFFFF",
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: 100,
            fontSize: 25,
          },
          headerShown: false,
        }}
      >
        <RootStack.Screen name="Your Lists" component={YourLists} />
        <RootStack.Screen name="CreateListModal" component={CreateListModal} />
        <RootStack.Screen
          name="Todo"
          component={Todo}
          options={({ route }) => ({
            title: route.params.title,
            listKey: route.params.listKey,
          })}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
