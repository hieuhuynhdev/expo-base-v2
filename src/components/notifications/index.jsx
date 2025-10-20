import { Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

export const ensureAndroidChannel = async () => {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
      showBadge: true,
      sound: "default",
      bypassDnd: false,
      lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
    });
  }
};

export const registerDevice = async () => {
  try {
    await ensureAndroidChannel();

    if (!Device.isDevice) throw new Error("Please test on real device");

    // get status
    const { status: existing } = await Notifications.getPermissionsAsync();

    let status = existing;

    if (existing !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      status = status;
    }
    if (status !== "granted")
      throw new Error("Notification permission not granted");

    // retrieve device token
    const token = (await Notifications.getDevicePushTokenAsync()).data;
    return { deviceToken: token };
  } catch (e) {
    console.log(e?.message);
    return { error: e?.message || String(e) };
  }
};

export const attachNotificationListeners = ({ onForeground, onTap } = {}) => {
  const sub1 = Notifications.addNotificationReceivedListener((n) => {
    onForeground && onForeground(n);
  });
  const sub2 = Notifications.addNotificationResponseReceivedListener((r) => {
    onTap && onTap(r);
  });

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
      shouldShowAlert: true,
    }),
  });

  return () => {
    sub1.remove();
    sub2.remove();
  };
};

export default registerDevice;
