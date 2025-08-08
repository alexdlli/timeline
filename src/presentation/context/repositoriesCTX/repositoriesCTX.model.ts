import type { repositories } from '@/repository/repository.model';
import type { PropsWithChildren } from 'react';

export type RepositoriesContextValues = {
  repository: repositories;
} & PropsWithChildren;
