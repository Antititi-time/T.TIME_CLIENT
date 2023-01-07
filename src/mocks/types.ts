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
  team_Id: number;
  user_Id: number;
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
