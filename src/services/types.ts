export type Invite = {
  status: number;
  success: boolean;
  message: string;
  data: {
    id: number;
    teamName: string;
    teamMember: number;
    teamId: string;
  };
};
export type TeamInfoData = {
  id: string;
  teamName: string;
  teamMember: number;
};
export type TeamData = {
  teamName: string;
  teamMember: number;
  teamId: number;
  userId: string;
};
export type ChatData = {
  status: number;
  success: boolean;
  message: string;
  data: {
    id: number;
    user_Id: number;
    team_Id: number;
    is_completed: boolean;
  };
};
export type TeamScore = {
  grade: number;
  questionType: string;
};
export type TeamScoreResponse = {
  status: number;
  success: boolean;
  message: string;
  data: TeamScore[];
};
export type UserData = {
  date: string;
  teamName: string;
  nickname: string;
  result: [
    {
      questionType: string;
      grade: number;
    },
    {
      questionType: string;
      grade: number;
    },
    {
      questionType: string;
      grade: number;
    },
    {
      questionType: string;
      grade: number;
    },
    {
      questionType: string;
      grade: number;
    },
  ];
};
export type TeamDetailResult = {
  answer: string;
  grade: number;
  nickname: string;
  questionNumber: number;
  questionType: string;
};
export type RequestLoginBody = {
  social: string;
  token: string;
};
