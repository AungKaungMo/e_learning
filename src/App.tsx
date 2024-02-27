import React, { useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import NavigationScroll from "./components/NavigationScroll";
import Routes from "./Routes";

export const App: React.FC<{}> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-textPrimary bg-background ">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavigationScroll />
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
