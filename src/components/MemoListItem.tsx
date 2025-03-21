import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "./Icon";

const MemoListItem = (): JSX.Element => {
  return (
    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListItemTitle}>Shopping List</Text>
        <Text style={styles.memoListItemDate}>1st Oct 2025 10:00</Text>
      </View>
      <TouchableOpacity>
        <Icon name="delete" size={32} color="#B0B0B0" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },
});
export default MemoListItem;
