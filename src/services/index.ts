import { api } from './base';
import { TeamData } from './types';
import axios from 'axios';

export const test = async (body: object) => {
  await api.post({ url: `/api/team/729262811`, data: body });
};

export const getTeamData = async (teamId: number) => {
  const { data } = await api.get({ url: `/api/team/${teamId}` });
  return data;
};

export const getTeamInfo = async (body: object, token: string | null) => {
  const { data } = await api.post({
    url: `/api/team`,
    data: body,
    headers: { 'Content-Type': 'application/json', Authorization: token },
  });
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

export const enterChat = async (teamId: number, body: object, token: string | null): Promise<TeamData> => {
  console.log(token);
  const { data } = await api.post({
    url: `/api/team/${teamId}`,
    headers: { Authorization: token },
  });
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
export const getKakaoAccessToken = async (authorization: string) => {
  const data = axios.post(
    `https://kauth.kakao.com/oauth/token`,
    {},
    {
      params: {
        grant_type: 'authorization_code',
        client_id: process.env.NEXT_PUBLIC_KAKAO_API_KEY,
        redirect_uri: 'http://localhost:3000/auth/kakao',
        code: authorization,
      },
    },
  );
  return data;
};
export const postKakaoAccessToken = async (KakaoToken: string | undefined) => {
  const { data } = await api.post({ url: `/api/user/auth`, data: { social: 'KAKAO', token: KakaoToken } });
  return data;
};
