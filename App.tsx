import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./src/screens/Home";
import MovieDetails from "./src/movie/[id]";
import SearchScreen from "./src/screens/SearchScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { AuthProvider, AuthContext } from "./src/context/AuthContext";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function TabsNavigator() {
  return (
    <AuthContext.Consumer>
      {({ isAuthenticated }) => (
        <Tabs.Navigator
          initialRouteName="HomeTab"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: true,
            tabBarActiveTintColor: "#E50914",
            tabBarInactiveTintColor: "#999",
            tabBarIcon: ({ color, size, focused }) => {
              const routeName = route.name;
              let icon = "home-outline";
              if (routeName === "HomeTab") icon = focused ? "home" : "home-outline";
              if (routeName === "Search") icon = focused ? "search" : "search-outline";
              if (routeName === "Favorites") icon = focused ? "heart" : "heart-outline";
              if (routeName === "Profile") icon = focused ? "person" : "person-outline";
              return <Ionicons name={icon} size={size} color={color} />;
            },
          })}
        >
          <Tabs.Screen
            name="HomeTab"
            component={HomeStack}
            options={{ title: "Home" }}
            listeners={({ navigation }) => ({
              tabPress: () => {
                // Always pop to root of Home stack when pressing Home tab
                navigation.navigate('MainTabs', { screen: 'HomeTab' });
              },
            })}
          />
          <Tabs.Screen
            name="Search"
            component={SearchScreen}
            listeners={({ navigation }) => ({
              tabPress: e => {
                if (!isAuthenticated) {
                  e.preventDefault();
                  navigation.getParent()?.navigate('LoginModal');
                }
              },
            })}
          />
          <Tabs.Screen
            name="Favorites"
            component={FavoritesScreen}
            listeners={({ navigation }) => ({
              tabPress: e => {
                if (!isAuthenticated) {
                  e.preventDefault();
                  navigation.getParent()?.navigate('LoginModal');
                }
              },
            })}
          />
          <Tabs.Screen
            name="Profile"
            component={ProfileScreen}
            listeners={({ navigation }) => ({
              tabPress: e => {
                if (!isAuthenticated) {
                  e.preventDefault();
                  navigation.getParent()?.navigate('LoginModal');
                }
              },
            })}
          />
        </Tabs.Navigator>
      )}
    </AuthContext.Consumer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabs" component={TabsNavigator} />
          <Stack.Screen
            name="LoginModal"
            component={LoginScreen}
            options={{ presentation: 'modal' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
