import { api } from './base';
import { TeamData } from './types';

export const test = async (body: object) => {
  await api.post({ url: `/api/team/729262811`, data: body });
};

export const getTeamInfo = async (body: object) => {
  const { data } = await api.post({ url: `/api/team`, data: body });
  return data;
};

export const getTeamResult = async (teamId: number) => {
  const { data } = await api.get({ url: `/api/result/team/${teamId}` });
  return { data };
};

export const enterChat = async (teamId: number, body: object): Promise<TeamData> => {
  const { data } = await api.post({ url: `/api/team/${teamId}`, data: body });
  return data;
};

export const getMyResult = async (userId: number) => {
  const { data } = await api.get({ url: `/api/result/${userId}` });
  // console.log(data);
  return data;
};
export const getCompleted = async (teamId: number) => {
  const { data } = await api.get({ url: `/api/team/check/${teamId}` });

  return data;
};
