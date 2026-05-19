import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

const COLORS = {
  primary: "#5DB82A",
  primaryLight: "#EAF7DE",
  primaryDark: "#4A9B20",
  white: "#FFFFFF",
  background: "#F5F5F5",
  inputBg: "#FFFFFF",
  border: "#E0E0E0",
  borderFocus: "#5DB82A",
  label: "#1A1A1A",
  subtitle: "#888888",
  placeholder: "#BBBBBB",
  error: "#E53E3E",
  link: "#5DB82A",
  social: "#F7F7F7",
  socialBorder: "#E8E8E8",
};

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <View style={styles.crossHorizontal} />
            <View style={styles.crossVertical} />
          </View>

          <Text style={styles.heading}>Sign In</Text>

          <Text style={styles.subheading}>
            Let's experience the joy of telecare AI.
          </Text>
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.label}>Email Address</Text>

            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color={COLORS.subtitle} />

              <TextInput
                placeholder="firstassignment@gmail.com"
                placeholderTextColor={COLORS.placeholder}
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
              />
            </View>
          </View>

          <View>
            <Text style={styles.label}>Password</Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color={COLORS.subtitle}
              />

              <TextInput
                placeholder="Enter your password..."
                placeholderTextColor={COLORS.placeholder}
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry={!showPassword}
              />

              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={20}
                  color={COLORS.subtitle}
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.signInBtn}>
            <Text style={styles.signInBtnText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.line} />

            <Text style={styles.dividerText}>or continue with</Text>

            <View style={styles.line} />
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn}>
              <FontAwesome name="facebook" size={22} color="#1877F2" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialBtn}>
              <AntDesign name="google" size={22} color="#DB4437" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialBtn}>
              <AntDesign name="instagram" size={22} color="#E1306C" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?
            <Text style={styles.link}> Sign Up.</Text>
          </Text>

          <TouchableOpacity>
            <Text style={styles.link}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 50,
    paddingBottom: 40,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },

  logo: {
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  crossHorizontal: {
    position: "absolute",
    width: 52,
    height: 14,
    borderRadius: 7,
    backgroundColor: COLORS.primary,
  },

  crossVertical: {
    position: "absolute",
    width: 14,
    height: 52,
    borderRadius: 7,
    backgroundColor: COLORS.primary,
  },

  heading: {
    fontSize: 30,
    fontWeight: "700",
    color: COLORS.label,
    marginBottom: 8,
  },

  subheading: {
    fontSize: 14,
    color: COLORS.subtitle,
    textAlign: "center",
    lineHeight: 20,
  },

  form: {
    gap: 18,
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 8,
    color: COLORS.label,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    backgroundColor: COLORS.inputBg,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: 14,
    paddingHorizontal: 16,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: COLORS.label,
  },

  signInBtn: {
    height: 56,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  signInBtnText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },

  dividerText: {
    marginHorizontal: 12,
    fontSize: 12,
    color: COLORS.subtitle,
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 14,
  },

  socialBtn: {
    flex: 1,
    height: 56,
    borderRadius: 14,
    backgroundColor: COLORS.social,
    borderWidth: 1,
    borderColor: COLORS.socialBorder,
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    alignItems: "center",
    marginTop: 35,
    gap: 10,
  },

  footerText: {
    fontSize: 13,
    color: COLORS.subtitle,
  },

  link: {
    color: COLORS.link,
    fontWeight: "600",
  },
});
