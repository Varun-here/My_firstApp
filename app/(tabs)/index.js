// app/(tabs)/index.js
import React from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
  Linking,
  Image,
} from "react-native";

const ACCENT = "#0f8f2f";

// 👉 Edit these if needed
const profile = {
  name: "Varun Sambath Kumar",
  role: "MS Computer Science @ UTA (2024–2026)",
  location: "Arlington, TX, USA",
  tagline: "Full-stack & AI/ML enthusiast building practical apps",
  about:
    "Graduate student passionate about React/React Native, TypeScript, Python, and ML. I enjoy shipping clean UI and data-driven features.",
  github: "https://github.com/Varun-here",
  linkedin: "https://www.linkedin.com/in/varun-s2002",
  // If you don’t have a direct image URL, this service fetches your avatar from LinkedIn:
  avatarUrl:
    "https://varun-here.github.io/Photo/WhatsApp%20Image%202025-08-29%20at%2013.41.29_9fd878cc.jpg",
  education: [
    {
      school: "University of Texas at Arlington",
      degree: "MS in Computer Science",
      years: "2024–2026",
    },
    {
      school: "Sri Krishna College of Engineering & Technology",
      degree: "BE in CSE",
      years: "2020–2024",
    },
  ],
  skills: [
    "React Native",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "Python",
    "PyTorch",
    "scikit-learn",
    "SQL",
    "PostgreSQL",
    "Docker",
  ],
};

// Small avatar component with graceful fallback to initials
function Avatar({ uri, name, size = 96, link }) {
  const [ok, setOk] = React.useState(true);

  const initials = React.useMemo(() => {
    const parts = (name || "").trim().split(/\s+/);
    return (parts[0]?.[0] || "V") + (parts[1]?.[0] || "S");
  }, [name]);

  const body = ok ? (
    <Image
      source={{ uri }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: "#e5e7eb",
      }}
      onError={() => setOk(false)}
      resizeMode="cover"
    />
  ) : (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: "#eef6ef",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#E5E7EB",
      }}
    >
      <Text style={{ fontSize: size / 3, color: ACCENT, fontWeight: "800" }}>
        {initials.toUpperCase()}
      </Text>
    </View>
  );

  return link ? (
    <Pressable onPress={() => Linking.openURL(link)}>{body}</Pressable>
  ) : (
    body
  );
}

const Btn = ({ title, href }) => (
  <Pressable onPress={() => href && Linking.openURL(href)} style={styles.btn}>
    <Text style={styles.btnText}>{title}</Text>
  </Pressable>
);

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Avatar + header */}
      <View style={{ alignItems: "center", gap: 10 }}>
        <Avatar
          uri={profile.avatarUrl}
          name={profile.name}
          link={profile.linkedin}
          size={110}
        />
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.role}>{profile.role}</Text>
        <Text style={styles.loc}>{profile.location}</Text>
      </View>

      <Text style={styles.tagline}>{profile.tagline}</Text>
      <Text style={styles.about}>{profile.about}</Text>

      <View style={styles.row}>
        <Btn title="GitHub" href={profile.github} />
        <Btn title="LinkedIn" href={profile.linkedin} />
      </View>

      <View style={styles.section}>
        <Text style={styles.h2}>Education</Text>
        {profile.education.map((e, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.cardTitle}>{e.school}</Text>
            <Text style={styles.cardText}>
              {e.degree} — {e.years}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.h2}>Skills</Text>
        <View style={styles.tags}>
          {profile.skills.map((s) => (
            <Text key={s} style={styles.tag}>
              #{s}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 14 },
  name: { fontSize: 26, fontWeight: "800", color: "#111827" },
  role: { color: ACCENT, fontWeight: "700" },
  loc: { color: "#6B7280" },
  tagline: { color: "#111827", marginTop: 8 },
  about: { color: "#6B7280" },

  row: { flexDirection: "row", gap: 10, marginTop: 10 },
  btn: {
    backgroundColor: ACCENT,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnText: { color: "#fff", fontWeight: "600" },

  section: { marginTop: 18, gap: 8 },
  h2: { fontSize: 18, fontWeight: "700", color: "#111827" },

  card: {
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 12,
    gap: 4,
  },
  cardTitle: { fontWeight: "700", color: "#111827" },
  cardText: { color: "#6B7280" },

  tags: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  tag: {
    backgroundColor: "#eef6ef",
    color: ACCENT,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
});
