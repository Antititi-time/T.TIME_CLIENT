import { rest } from 'msw';
import { Favorite, Invite, UserData, TeamScoreResponse } from './types';

export const handlers = [
  //example.
  rest.get('/favorite', (_req, res, ctx) => {
    sleep(1000);
    return res(
      ctx.json<Favorite[]>([
        {
          id: '1',
          mint: '코 끝에선 화➰❤️ 입안에선 후➰💚 때론 달콤하게🍫 때론 시큰하게🌿민트초코가 세상을 지배한다🍦 코 끝에선 화➰❤️ 입안에선 후➰💚 때론 달콤하게🍫 때론 시큰하게🌿민트초코가 세상을 지배한다🍦 코 끝에선 화➰❤️ 입안에선 후➰💚 때론 달콤하게🍫 때론 시큰하게🌿민트초코가 세상을 지배한다🍦 코 끝에선 화➰❤️ 입안에선 후➰💚 때론 달콤하게🍫 때론 시큰하게🌿민트초코가 세상을 지배한다🍦 코 끝에선 화➰❤️ 입안에선 후➰💚 때론 달콤하게🍫 때론 시큰하게🌿민트초코가 세상을 지배한다🍦 코 끝에선 화➰❤️ 입안에선 후➰💚 때론 달콤하게🍫 때론 시큰하게🌿',
          choco:
            '우리👩‍👩‍👧민초🍃🍫배척😫하지마세요🙅‍♀️ 님이👤민초🍃🍫보다 초코칩🍪있어?😑 님이👤민초🍃🍫보다 박하맛🍃이나?🤨 님이👤민초🍃🍫보다 청록색🧤이야?😤 다시는...❌ 민초🍃🍫 무시🤷‍♀️하지마🖕🏻 민초러👩‍🌾들은 퍼가💚',
        },
      ]),
    );
  }),
  rest.post('/api/team', (_req, res, ctx) => {
    sleep(1000);

    return res(
      ctx.json<Invite[]>([
        {
          status: 200,
          success: true,
          message: '초대장 생성 성공',
          data: {
            id: 1,
            teamName: 's',
            teamMember: 11,
            teamCode: 'ndd93w',
          },
        },
      ]),
    );
  }),
  rest.get('/api/result/ttime', (_req, res, ctx) => {
    return res(
      ctx.json<UserData[]>([
        {
          date: '2023-01-05',
          teamName: '안티티티타임',
          nickname: '채영',
          result: [
            {
              questionType: 'A',
              grade: 10,
            },
            {
              questionType: 'C',
              grade: 8,
            },
            {
              questionType: 'E',
              grade: 7,
            },
            {
              questionType: 'B',
              grade: 5,
            },
            {
              questionType: 'D',
              grade: 2,
            },
          ],
        },
      ]),
    );
  }),
  rest.post('/api/result/team/score/teamId', (_req, res, ctx) => {
    sleep(1000);

    return res(
      ctx.json<TeamScoreResponse[]>([
        {
          status: 200,
          success: true,
          message: '팀 결과 항목별 평균 점수 조회 성공',
          data: [
            {
              grade: 69,
              questionType: 'b',
            },
            {
              grade: 68,
              questionType: 'e',
            },
            {
              grade: 68,
              questionType: 'd',
            },
            {
              grade: 67,
              questionType: 'a',
            },
            {
              grade: 62,
              questionType: 'c',
            },
          ],
        },
      ]),
    );
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
