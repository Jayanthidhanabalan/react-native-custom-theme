import * as React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { ThemeContext, ThemeProvider } from 'react-native-custom-theme';

const App = () => {
  return (
    <ThemeProvider>
      <Launcher />
    </ThemeProvider>
  );
};

// Move this outside App so it can consume context properly
const Launcher = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  console.log('RNTHEme', theme.primary);

  const OnButtonClick = () => {
    console.log('SECONDARY');
    setTheme('SECONDARY');
  };

  return (
    <SafeAreaView>
      <Text style={{ backgroundColor: theme.primary }}>{theme.primary}</Text>
      <Button onPress={OnButtonClick} title="Toggle Theme" />
    </SafeAreaView>
  );
};

export default App;
