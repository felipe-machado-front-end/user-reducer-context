import { ContextProvider } from "./contexts/Context";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <h1 className="bg-red-500">OLA MUNDO</h1>
      <ContextProvider>
        <SignUp />
      </ContextProvider>
    </div>
  );
}

export default App;
