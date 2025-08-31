// app/(tabs)/resume.js
import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Linking,
  ActivityIndicator,
} from "react-native";
import { WebView } from "react-native-webview";

const ACCENT = "#0f8f2f";

// Your GitHub Pages PDF (parentheses are auto-encoded)
const RAW_PDF_URL =
  "https://varun-here.github.io/Resume/Varun_Kumar_Resume(portfolio).pdf";
const PDF_URL = encodeURI(RAW_PDF_URL);

const Btn = ({ title, onPress }) => (
  <Pressable style={styles.btn} onPress={onPress}>
    <Text style={styles.btnText}>{title}</Text>
  </Pressable>
);

export default function Resume() {
  return (
    <View style={{ flex: 1 }}>
      {/* Header actions */}
      <View style={styles.header}>
        <Text style={styles.title}>Resume</Text>
        <Btn title="Open in Browser" onPress={() => Linking.openURL(PDF_URL)} />
      </View>

      {/* Embedded PDF preview */}
      <WebView
        source={{ uri: PDF_URL }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator size="small" style={{ marginTop: 16 }} />
        )}
        originWhitelist={["*"]}
        allowsBackForwardNavigationGestures
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    gap: 8,
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFF",
  },
  title: { fontSize: 22, fontWeight: "800", color: "#111827" },
  btn: {
    alignSelf: "flex-start",
    backgroundColor: ACCENT,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnText: { color: "#fff", fontWeight: "600" },
});
