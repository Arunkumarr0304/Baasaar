// ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

const lightTheme = {
  background: '#FFFFFF',
  color: '#000000',
  color2: '#4C4C4C',
  text: '#000000',
  text2: '#737680',
  text3: '#A3A5AD',
  coloring: '#EEEEEE',
  cardbg: '#ffffff',
  card: '#F1F1F1',
  card2: 'rgba(234, 221, 255, 0.4)',
};

const darkTheme = {
  background: '#000000',
  color: '#FFFFFF',
  color2: '#BABABA',
  text: '#BABABA',
  text2: '#ffffff',
  text3: '#BABABA',
  coloring: '#333333',
  cardbg: '#333333',
  card: '#333333',
  card2: 'rgba(255, 102, 102, 0.4)',
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const loadDarkModeState = async () => {
      try {
        const darkModeState = await AsyncStorage.getItem("darkMode");
        if (darkModeState !== null) {
          const parsedState = JSON.parse(darkModeState);
          setDarkMode(parsedState.darkMode);
          setTheme(parsedState.darkMode ? darkTheme : lightTheme);
        }
      } catch (error) {
        console.error("Error loading dark mode state:", error);
      }
    };

    loadDarkModeState();
  }, []);

  const toggleTheme = async () => {
    try {
      const newDarkMode = !darkMode;
      setDarkMode(newDarkMode);
      setTheme(newDarkMode ? darkTheme : lightTheme);
      await AsyncStorage.setItem("darkMode", JSON.stringify({ darkMode: newDarkMode }));
    } catch (error) {
      console.error("Error saving dark mode state:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
