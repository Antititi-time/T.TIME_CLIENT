import { api } from './base';

export const test = async (body: object) => {
  await api.post({ url: `/api/team/729262811`, data: body });
};
