import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { supabase } from "@/components/utils/client";
import { useNavigation } from "@react-navigation/native";

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      setMessage("Login successful!");
      navigation.navigate("sandbox" as never);
    }
  };

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}
      {message && <Text style={styles.message}>{message}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 11,
            borderWidth: 1,
            borderColor: "#6646EC",
            color: "#FFF4A0",
            padding: 5,
            backgroundColor: "#024886",
          }}
        >
          LOGIN
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#727272",
  },
  input: {
    height: 40,
    borderColor: "#6646EC",
    color: "#FFF4A0",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    fontSize: 11,
  },
  error: {
    fontSize: 11,
    color: "#FE4437",
    marginBottom: 12,
    textAlign: "center",
    textTransform: "uppercase",
  },
  message: {
    color: "blue",
    marginBottom: 12,
    fontSize: 11,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default LoginScreen;
