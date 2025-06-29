import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import LoginErrorScreen from '../screens/LoginErrorScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import VerifyAccountScreen from '../screens/VerifyAccountScreen';
import VerifyAccountSuccessScreen from '../screens/VerifyAccountSuccessScreen';
import CreateNewPasswordScreen from '../screens/CreateNewPasswordScreen';
import FoodHomeScreen from '../screens/FoodHomeScreen';
import FilterScreen from '../screens/FilterScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen';
import MenuDetailScreen from '../screens/MenuDetailScreen';
import CartScreen from '../screens/CartScreen';
import MyAddressScreen from '../screens/MyAddressScreen';
import AddressMapScreen from '../screens/AddressMapScreen';
import PaymentMethodsScreen from '../screens/PaymentMethodsScreen';
import OrderConfirmationScreen from '../screens/OrderConfirmationScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import DeliveryTrackingScreen from '../screens/DeliveryTrackingScreen';
import DeliveryMapScreen from '../screens/DeliveryMapScreen';
import ChatScreen from '../screens/ChatScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import ProfileDetailScreen from '../screens/ProfileDetailScreen';
import PersonalInfoScreen from '../screens/PersonalInfoScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E5EA',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={FoodHomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileDetailScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="LoginError" component={LoginErrorScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="VerifyAccount" component={VerifyAccountScreen} />
      <Stack.Screen
        name="VerifyAccountSuccess"
        component={VerifyAccountSuccessScreen}
      />
      <Stack.Screen
        name="CreateNewPassword"
        component={CreateNewPasswordScreen}
      />
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
      <Stack.Screen name="MenuDetail" component={MenuDetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="MyAddress" component={MyAddressScreen} />
      <Stack.Screen name="AddressMap" component={AddressMapScreen} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
      <Stack.Screen
        name="OrderConfirmation"
        component={OrderConfirmationScreen}
      />
      <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
      <Stack.Screen
        name="DeliveryTracking"
        component={DeliveryTrackingScreen}
      />
      <Stack.Screen name="DeliveryMap" component={DeliveryMapScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
