
import {Main} from "./components/layout/Main";
import { MeetupProvider } from "./context/provider";

function App() {
  return (
    <div data-test="app">
      <MeetupProvider>
        <Main />
      </MeetupProvider>
    </div>
  );
}

export default App;
