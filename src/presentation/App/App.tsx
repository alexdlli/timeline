import { mockRepository } from '@/repository/mockRepository';
import '@/styles/app.css';
import { RepositoriesProvider } from '../context/repositoriesCTX';
import { Layout } from '../layouts/layout';
import { TimeLineScreen } from '../screen/timeline-screen/timeline-screen';

function App() {
  return (
    <RepositoriesProvider repository={mockRepository}>
      <Layout>
        <TimeLineScreen />
      </Layout>
    </RepositoriesProvider>
  );
}

export default App;
