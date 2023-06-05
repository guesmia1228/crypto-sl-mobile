import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Counter = () => {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const countdownDate = new Date("2023-08-01T00:00:00Z").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        // Countdown reached, do something
        clearInterval(interval);
        setCountdown("App is now available!");
      } else {
        // Calculate remaining days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Coming Soon</Text>
      {countdown && <Text style={styles.countdown}>{countdown}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  countdown: {
    color: "white",
    fontSize: 20,
  },
});

export default Counter;
