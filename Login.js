import { useLinkProps } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import RegisterScreen from './RegisterScreen';
import { auth } from "./firebase";

export default function Login({ navigation }) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace('Main');
            }
        });
        return unsubscribe;
    }, [])

    const signIn = () => {
       auth
       .signInWithEmailAndPassword(email,password)
       .catch((error)=>alert(error.message)) 
    }


    return (
        <View style={styles.container}>
            <ImageBackground style={{ width: "100%", height: "100%", }} source={{ uri: 'https://www.color-hex.com/palettes/78808.png' }}>
                <Text style={{ fontSize: 21, textAlign: 'center', marginTop: 60, color: 'black' }}>{"Muhammad Ghufran"}</Text>
                <Text style={{ fontSize: 21, textAlign: 'center', marginTop: 10, color: 'black' }}>{"Blood Bank Login "}</Text>
                <StatusBar style="auto" />
                <Image source={{ uri: "https://cdn5.vectorstock.com/i/1000x1000/13/94/blood-donor-logo-vector-26181394.jpg" }} style={{ width: 120, height: 100,marginTop:20,marginLeft:120 }} />

                <TextInput style={{ height: 40, width: 250, marginTop: 30, borderColor: 'black', borderWidth: 1, textAlign: 'center', marginLeft: 50, backgroundColor: 'white', borderRadius: 12 }} type='email' value={email} onChangeText={(text) => setEmail(text)} placeholder={"   Enter Username"} />
                <TextInput style={{ height: 40, width: 250, marginTop: 10, borderColor: 'black', borderWidth: 1, textAlign: 'center', marginLeft: 50, backgroundColor: 'white', borderRadius: 12 }} type='password' value={password} onChangeText={(text) => setPassword(text)} placeholder={"   Enter Password"} secureTextEntry={true} onSubmitEditing={signIn} />

                <TouchableOpacity>
                    <Text style={styles.btn} onPress={signIn}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.btn2} onPress={() => navigation.navigate('RegisterScreen')} >Register</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:
    {
        fontSize: 20,
        marginTop: 25, marginLeft: 100,
        backgroundColor: '#e64545',
        height: 30,
        width: 150,
        textAlign: 'center', color: 'white',
        borderRadius: 11,
    },
    btn2:
    {
        fontSize: 20,
        marginTop: 25, marginLeft: 100,
        backgroundColor: '#e64545',
        height: 30,
        width: 150,
        textAlign: 'center', color: 'white',
        borderRadius: 11,
    },
});
