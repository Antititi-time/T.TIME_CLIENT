//example
export type Favorite = {
  id: string;
  mint: string;
  choco: string;
};
export type Invite = {
  status: number;
  success: boolean;
  message: string;
  data: {
    id: number;
    teamName: string;
    teamMember: number;
    teamCode: string;
  };
};
export type TeamData = {
  teamName: string;
  teamMember: number;
};
export type UserData = {
  date: string;
  teamName: string;
  nickname: string;
  result: [
    {
      questionType: string;
      score: number;
    },
    {
      questionType: string;
      score: number;
    },
    {
      questionType: string;
      score: number;
    },
    {
      questionType: string;
      score: number;
    },
    {
      questionType: string;
      score: number;
    },
  ];
};
