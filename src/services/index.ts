import { api } from './base';
import { TeamData, RequestLoginBody } from './types';
import axios from 'axios';
import { DOMAIN } from '@src/constants/domain';

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
  const { data } = await api.post({
    url: `/api/team/${teamId}`,
    headers: { 'Content-Type': 'application/json', Authorization: token },
  });
  return data;
};

export const getMyResult = async (userId: number, teamId: number) => {
  const { data } = await api.get({ url: `/api/result/${userId}/${teamId}` });

  return data;
};
export const getCompleted = async (teamId: number) => {
  const { data } = await api.get({ url: `/api/team/check/${teamId}` });

  return data;
};
export const postAnswer = async (teamId: number, body: object, token: string | null) => {
  const { data } = await api.post({
    url: `/api/chat`,
    data: body,
    headers: { 'Content-Type': 'application/json', Authorization: token },
  });

  return data;
};
export const patchComplete = async (teamId: number, token: string | null) => {
  const { data } = await api.patch({
    url: `/api/result/${teamId}`,
    data: { isCompleted: true },
    headers: { Authorization: token },
  });
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
        redirect_uri: DOMAIN,
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

export const requestLogin = async (body: RequestLoginBody) => {
  const { data } = await api.post({ url: `/api/user/auth`, data: body });
  return data;
};
export const getMyPage = async () => {
  const { data } = await api.get({
    url: `/api/user/myPage`,
    headers: {
      Authorization: localStorage.getItem('accessToken'),
    },
  });
  return data;
};
