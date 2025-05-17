import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
    const router = useRouter();
    return (
        <View className="flex-1 justify-center items-center bg-gradient-to-b from-purple-500 to-indigo-600 max:p-4 p-1">
            <View className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl">
                <Text className="text-2xl font-bold text-center">Welcome Back</Text>
                <Text className="text-gray-500 text-center mt-2 mb-6">Enter your details below</Text>

                <TextInput
                    placeholder="Email Address"
                    className="w-full bg-gray-100 p-4 rounded-xl mb-4"
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    className="w-full bg-gray-100 p-4 rounded-xl mb-6"
                />

                <TouchableOpacity className="w-full p-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500">
                    <Text className="text-white text-center font-semibold">Sign in</Text>
                </TouchableOpacity>

                <Text className="text-center text-gray-500 mt-4">Forgot your password?</Text>

                <Text className="text-center text-gray-500 mt-6">Or sign in with</Text>
                <View className="flex-row justify-center space-x-4 mt-4">
                    <TouchableOpacity className="p-3 bg-gray-100 rounded-full">
                        <Text className="text-gray-600">G</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="p-3 bg-gray-100 rounded-full">
                        <Text className="text-gray-600">F</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="absolute top-16 right-8">
                <TouchableOpacity onPress={() => router.push('/register')}> 
                    <Text className="text-white text-sm">Don't have an account? <Text className="font-semibold">Get Started</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;
