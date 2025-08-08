import type { repositories } from '@/repository/repository.model';
import { createContext, useContext } from 'react';
import type { RepositoriesContextValues } from './repositoriesCTX.model';

const RepositoriesCTX = createContext<repositories>({} as repositories);

function RepositoriesProvider({
  children,
  repository,
}: RepositoriesContextValues) {
  return (
    <RepositoriesCTX.Provider value={repository}>
      {children}
    </RepositoriesCTX.Provider>
  );
}

function useRepositories(): repositories {
  const context = useContext(RepositoriesCTX);

  if (!context) {
    throw new Error(
      'useRepositories must be used within a RepositoriesProvider'
    );
  }

  return context;
}

export { RepositoriesCTX, RepositoriesProvider, useRepositories };
