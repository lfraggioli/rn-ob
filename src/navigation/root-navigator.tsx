import React from "react";
import PublicNavigator from "./public-navigator";

// import PrivateNavigator from './private-navigator'; // más adelante

const RootNavigator = () => {
  const isLoggedIn = false; // Cambiar por lógica real en el futuro

  if (isLoggedIn) {
    // return <PrivateNavigator />;
    return null; // Placeholder por ahora
  }

  return <PublicNavigator />;
};

export default RootNavigator;
