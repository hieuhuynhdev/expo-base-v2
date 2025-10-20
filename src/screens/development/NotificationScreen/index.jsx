import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import {
  registerDevice,
  attachNotificationListeners,
} from "@/components/notifications";
import { ENV } from "@/common";

const API_BASE = ENV.API_URL;
const MOCK_USER_ID = "u_123";

export const NotificationScreen = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    let cleanup;
    (async () => {
      const { deviceToken, error } = await registerDevice();
      if (error) {
        Alert.alert("Push error", error);
        return;
      }
      if (deviceToken) {
        setToken(deviceToken);
        try {
          await fetch(`${API_BASE}/api/push/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userId: MOCK_USER_ID,
              platform: "android",
              token: deviceToken,
            }),
          });
        } catch (e) {
          console.warn("register token failed:", e);
        }
      }
    })();

    cleanup = attachNotificationListeners({
      onForeground: (n) => {
        console.log("Foreground notification:", n.request?.content);
      },
      onTap: (r) => {
        const data = r?.notification?.request?.content?.data;
        console.log("Tapped notification data:", data);
      },
    });

    return () => cleanup && cleanup();
  }, []);

  const onSendTest = async () => {
    if (!token) {
      Alert.alert(
        "No tokens yet",
        "Open the app again on your real device to receive the token."
      );
      return;
    }
    try {
      await fetch(`${API_BASE}/api/push/test`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          title: "Hello 👋",
          body: "Test send notification from FCM",
          data: { screen: "Inbox", threadId: "abc123" },
        }),
      });
      Alert.alert("Sent", "Check notifications on your device");
    } catch (e) {
      Alert.alert("Failed", String(e));
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        padding: 16,
      }}
    >
      <Text selectable style={{ fontWeight: "bold" }}>
        FCM token:
      </Text>
      <Text
        selectable
        numberOfLines={3}
        style={{ padding: 8, textAlign: "center" }}
      >
        {token || "Null"}
      </Text>
      <Button title="Send" onPress={onSendTest} />
    </View>
  );
};

export default NotificationScreen;
