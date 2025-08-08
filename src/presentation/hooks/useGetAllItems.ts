import { useRepositories } from '../context/repositoriesCTX';

function useGetAllItems() {
  const { items } = useRepositories();
  const data = items.getAll();

  return {
    data,
  };
}

export { useGetAllItems };
