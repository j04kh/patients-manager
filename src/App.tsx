import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/layout/Layout";
import Patients from "./views/Patients";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <Layout>
          <Patients />
        </Layout>
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
