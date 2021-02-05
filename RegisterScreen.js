import { useLinkProps } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState,useLayoutEffect } from 'react';

import {ScrollView, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import {auth} from './firebase';

const RegisterScreen = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");

    
    const register=()=>{
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(authUser =>{
            authUser.user.updateProfile({
                displayName:name,
                
            })
        })
        .catch((error)=> alert(error.message));
    }
    
    return (
        
        <ScrollView style={{backgroundColor:'white'}}>
        <View style={styles.container}>
           
                <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 50, color: 'black' }}>{"Welcome to Saylani Blood Bank"}</Text>
                <Image source={{ uri: "https://cdn5.vectorstock.com/i/1000x1000/13/94/blood-donor-logo-vector-26181394.jpg" }} style={{ width: 120, height: 100,marginTop:20 }} />
                <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 10, color: 'black' }}>{"Create an account"}</Text>
                <StatusBar style="auto" />
                <TextInput style={{ height: 40, width: 250, marginTop: 30, borderColor: 'black', borderWidth: 1, textAlign: 'center', backgroundColor: 'white', borderRadius: 12 }} type='text' value={name} onChangeText={(text) => setName(text)} placeholder={"   Enter Name"} />
                <TextInput style={{ height: 40, width: 250, marginTop: 30, borderColor: 'black', borderWidth: 1, textAlign: 'center', backgroundColor: 'white', borderRadius: 12 }} type='text'  value={email} onChangeText={(text) => setEmail(text)} placeholder={"   Enter Email"} />
                <TextInput style={{ height: 40, width: 250, marginTop: 30, borderColor: 'black', borderWidth: 1, textAlign: 'center', backgroundColor: 'white', borderRadius: 12 }} type='password' secureTextEntry value={password} onChangeText={(text) => setPassword(text)} placeholder={"   Enter Password"} />
                <TextInput style={{ height: 40, width: 250, marginTop: 30, borderColor: 'black', borderWidth: 1, textAlign: 'center', backgroundColor: 'white', borderRadius: 12 }} type='text' value={city} onChangeText={(text) => setCity(text)} placeholder={"   Enter City"} onSubmitEditing={register} />

                <TouchableOpacity>
                    <Text style={styles.btn} onPress={register}>Register</Text>
                </TouchableOpacity>

                
           
        </View></ScrollView>

    );
};

export default RegisterScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:
    {
        fontSize: 20,
        marginTop: 25, 
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
        backgroundColor: '#94e3bb',
        height: 30,
        width: 150,
        textAlign: 'center', color: '#3f6e5c',
        borderRadius: 11,
    },
    
});
