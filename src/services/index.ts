import { api } from './base';
import { TeamData } from './types';

export const test = async (body: object) => {
  await api.post({ url: `/api/team/729262811`, data: body });
};

export const getTeamData = async (teamId: number) => {
  const { data } = await api.get({ url: `/api/team/${teamId}` });
  return data;
};

export const getTeamInfo = async (body: object) => {
  const { data } = await api.post({ url: `/api/team`, data: body });
  return data;
};

export const getTeamResult = async (teamId: number) => {
  const { data } = await api.get({ url: `/api/result/team/${teamId}` });
  return { data };
};

export const getTeamChartResult = async (teamId: number) => {
  const { data } = await api.get({ url: `/api/result/team/score/${teamId}` });
  return { data };
};

export const getTeamDetailResult = async (teamId: number, type: string) => {
  const { data } = await api.get({ url: `/api/result/team/${teamId}/detail?type=${type}` });
  return { data };
};

export const enterChat = async (teamId: number, body: object): Promise<TeamData> => {
  const { data } = await api.post({ url: `/api/team/${teamId}`, data: body });
  return data;
};

export const getMyResult = async (userId: number) => {
  const { data } = await api.get({ url: `/api/result/${userId}` });

  return data;
};
export const getCompleted = async (teamId: number) => {
  const { data } = await api.get({ url: `/api/team/check/${teamId}` });

  return data;
};
export const postAnswer = async (teamId: number, body: object) => {
  const { data } = await api.post({ url: `/api/chat/${teamId}`, data: body });

  return data;
};
export const patchComplete = async (userId: number) => {
  const { data } = await api.patch({ url: `/api/result/${userId}`, data: { isCompleted: true } });
  return data;
};
export const getMyPage = async () => {
  const { data } = await api.get({
    url: `/api/user/myPage`,
    headers: {
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDAwLCJpYXQiOjE2Nzc3NjU5ODIsImV4cCI6MTY3Nzc3Njc4Mn0.yxEO48Yk0IHw1iVAFNp574RojMmaFL5vUbvZthkcpEo',
    },
  });
  return data;
};
