import React from "react";
import { View, Text, Pressable, StyleSheet, Linking } from "react-native";

const EMAIL = "varunsambath02@outlook.com";
const PHONE = "+1 817-936-7600";
const GITHUB = "https://github.com/Varun-here";
const LINKEDIN = "https://www.linkedin.com/in/varun-s2002";

const Btn = ({ title, href }) => (
  <Pressable onPress={() => Linking.openURL(href)} style={styles.btn}>
    <Text style={styles.btnText}>{title}</Text>
  </Pressable>
);

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{EMAIL}</Text>
        <Btn title="Email me" href={`mailto:${EMAIL}`} />
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{PHONE}</Text>
        <Btn title="Call me" href={`tel:${PHONE.replace(/[^\\d+]/g, "")}`} />
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Social</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Btn title="GitHub" href={GITHUB} />
          <Btn title="LinkedIn" href={LINKEDIN} />
        </View>
      </View>
    </View>
  );
}

const ACCENT = "#0f8f2f";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 12 },
  title: { fontSize: 22, fontWeight: "800", color: "#111827" },

  card: {
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 16,
    gap: 8,
  },
  label: { color: "#6B7280", fontWeight: "600" },
  value: { color: "#111827", fontWeight: "700" },

  btn: {
    backgroundColor: ACCENT,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  btnText: { color: "#fff", fontWeight: "600" },
});
