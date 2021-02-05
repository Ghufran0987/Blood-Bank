import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../../Main';
import Login from '../../Login';
import RegisterScreen from '../../RegisterScreen';
const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="Main" component={Main} />
                <Stack.Screen options={{ headerShown: false }} name="RegisterScreen" component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;