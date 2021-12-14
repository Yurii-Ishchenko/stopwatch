import Container from "./components/container/Container.jsx";
import ThemeToggler from "./components/themeToggler/ThemeToggler.jsx";
import StopWatch from "./components/stopWatch/StopWatch.jsx";

function App() {
  return (
    <Container>
      <ThemeToggler />
      <StopWatch />
    </Container>
  );
}

export default App;
