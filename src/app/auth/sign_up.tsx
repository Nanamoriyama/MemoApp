import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";
const Signup = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} value="Email address" />
        <TextInput style={styles.input} value="Password" />
        <Button label="submit" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registerd?</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    backgroundColor: "#FFFFFF",
    height: 48,
    fontSize: 16,
    marginBottom: 16,
  },

  footer: {
    flexDirection: "row",
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: "#000000",
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#467FD3",
  },
});
export default Signup;
