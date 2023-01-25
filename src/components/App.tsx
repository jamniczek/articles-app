import "./App.scss";

import { ContextProvider } from "../context/AppContext";
import { Articles } from "./Articles/Articles";

const App = () => {
  return (
    <ContextProvider>
      <Articles />
    </ContextProvider>
  );
};

export default App;
