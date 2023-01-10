// import {
//   A_icon1,
//   A_icon2,
//   B_icon1,
//   B_icon2,
//   C_icon1,
//   C_icon2,
//   D_icon2,
//   D_icon3,
//   E_icon1,
//   E_icon2,
//   End_icon,
// } from '@src/assets/icons';

export const CHAT_TEXT = [
  '티타임은 팀과 개인에 대해 솔직하게 묻고 답하는 시간이에요.',
  '차 한잔 마시면서, 최대한 편하게 답변\n해주시면 돼요.',
  '답변은 수정이 불가하니 신중하게\n답변해주세요.😊',
  '이제 티타임 시작해볼게요!',
  D_icon2,
  '먼저 당신의 일상이 궁금해요. \n업무 외에 본인 생활을 즐기고 있나요?',
  `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
  `그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`,
  D_icon3,
  '그렇게 느끼셨군요!',
  '그렇다면 충분한 휴식시간을 갖고 있나요?',
  `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
];
import {
  A_icon1,
  A_icon2,
  B_icon1,
  B_icon2,
  C_icon1,
  C_icon2,
  D_icon2,
  D_icon3,
  E_icon1,
  E_icon2,
  End_icon,
} from '@src/assets/icons';

export const CHAT_QUESTION_LIST = [
  {
    questionType: 'start',
    questionNumber: 1,
    questions: [
      '티타임은 팀과 개인에 대해 솔직하게 묻고 답하는 시간이에요.',
      '차 한잔 마시면서, 최대한 편하게 답변\n해주시면 돼요.',
      '답변은 수정이 불가하니 신중하게\n답변해주세요.😊',
      '이제 티타임 시작해볼게요!',
    ],
  },
  {
    questionType: 'D',
    questionNumber: 1,
    questions: [
      D_icon2,
      '먼저 당신의 일상이 궁금해요. \n업무 외에 본인 생활을 즐기고 있나요?',
      `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
    ],
  },
  {
    questionType: 'D',
    questionNumber: 1,
    questions: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
  },
  {
    questionType: 'D',
    questionNumber: 2,
    questions: [
      D_icon3,
      '그렇게 느끼셨군요!',
      '그렇다면 충분한 휴식시간을 갖고 있나요?',
      `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
    ],
  },
  {
    questionType: 'D',
    questionNumber: 2,
    questions: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
  },
  {
    questionType: 'E',
    questionNumber: 1,
    questions: [
      E_icon1,
      '그렇게 느끼셨군요!',
      '몸과 마음 모두 건강하다고 느끼시나요?',
      `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
    ],
  },
  {
    questionType: 'E',
    questionNumber: 1,
    questions: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
  },
  {
    questionType: 'E',
    questionNumber: 1,
    questions: [
      E_icon2,
      '그렇다면 본인만의 스트레스 해소법이 있나요?',
      `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
    ],
  },
  {
    questionType: 'E',
    questionNumber: 2,
    questions: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
  },
  {
    questionType: 'C',
    questionNumber: 1,
    questions: [
      C_icon1,
      '현재 배우고 성장하고 있다고 느끼시나요?',
      `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
    ],
  },
  {
    questionType: 'C',
    questionNumber: 1,
    questions: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
  },
  {
    questionType: 'C',
    questionNumber: 2,
    questions: [
      C_icon2,
      '최근에 작업한 결과물에 만족하고 있나요?',
      `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
    ],
  },
  {
    questionType: 'C',
    questionNumber: 2,
    questions: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
  },
  {
    questionType: 'B',
    questionNumber: 1,
    questions: [
      B_icon1,
      '현재 업무가 본인의 목표(꿈)을 달성하는데 도움이 된다고 생각하시나요?',
      `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
    ],
  },
  {
    questionType: 'B',
    questionNumber: 1,
    questions: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
  },
  {
    questionType: 'B',
    questionNumber: 2,
    questions: [
      B_icon2,
      '현재 업무를 더 잘하기 위한 노력을 한적이 있나요?',
      `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
    ],
  },
  {
    questionType: 'B',
    questionNumber: 2,
    questions: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
  },
  {
    questionType: 'A',
    questionNumber: 1,
    questions: [
      A_icon1,
      '팀의 목표와 방향성에 대해 분명하게 알고 있나요?',
      `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
    ],
  },
  {
    questionType: 'A',
    questionNumber: 1,
    questions: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
  },
  {
    questionType: 'A',
    questionNumber: 2,
    questions: [
      A_icon2,
      '팀에서 본인의 의견을 제시하는거에 있어서 주저하거나 망설인 경험이 있나요?',
      `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
    ],
  },
  {
    questionType: 'A',
    questionNumber: 2,
    questions: [`그렇게 생각한 이유가 무엇인가요?\n간단하게 한문장 정도로 작성부탁드려요 :)`],
  },
  {
    questionType: 'End',
    questionNumber: 0,
    questions: [
      End_icon,
      '지금까지 성실히 티타임에 응해주셔서\n정말 감사해요🙌',
      '티타임을 통해 팀과 자신을 다시 한번\n돌아볼 수 있는 시간이 되었길 바라요😀',
      '개인 결과 페이지에서 결과를 확인해보세요!',
    ],
  },
];

// export const CHAT_QUESTION_LIST = [
//   {
//     questionType: 'start',
//     questionNumber: 1,
//     choiceQuestion: [
//       '티타임은 팀과 개인에 대해 솔직하게 묻고 답하는 시간이에요.',
//       '차 한잔 마시면서, 최대한 편하게 답변\n해주시면 돼요.',
//       '답변은 수정이 불가하니 신중하게\n답변해주세요.😊',
//       '이제 티타임 시작해볼게요!',
//     ],
//   },
//   {
//     questionType: 'D',
//     questionNumber: 1,
//     choiceQuestion: [
//       D_icon2,
//       '먼저 당신의 일상이 궁금해요. \n업무 외에 본인 생활을 즐기고 있나요?',
//       `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
//     ],
//   },
//   {
//     questionType: 'D',
//     questionNumber: 1,
//     inputQuestion: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
//   },
//   {
//     questionType: 'D',
//     questionNumber: 2,
//     choiceQuestion: [
//       D_icon3,
//       '그렇게 느끼셨군요!',
//       '그렇다면 충분한 휴식시간을 갖고 있나요?',
//       `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
//     ],
//   },
//   {
//     questionType: 'D',
//     questionNumber: 2,
//     inputQuestion: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
//   },
//   {
//     questionType: 'E',
//     questionNumber: 1,
//     choiceQuestion: [
//       E_icon1,
//       '그렇게 느끼셨군요!',
//       '몸과 마음 모두 건강하다고 느끼시나요?',
//       `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
//     ],
//   },
//   {
//     questionType: 'E',
//     questionNumber: 1,
//     inputQuestion: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
//   },
//   {
//     questionType: 'E',
//     questionNumber: 1,
//     choiceQuestion: [
//       E_icon2,
//       '그렇다면 본인만의 스트레스 해소법이 있나요?',
//       `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
//     ],
//   },
//   {
//     questionType: 'E',
//     questionNumber: 2,
//     inputQuestion: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
//   },
//   {
//     questionType: 'C',
//     questionNumber: 1,
//     choiceQuestion: [
//       C_icon1,
//       '현재 배우고 성장하고 있다고 느끼시나요?',
//       `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
//     ],
//   },
//   {
//     questionType: 'C',
//     questionNumber: 1,
//     inputQuestion: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
//   },
//   {
//     questionType: 'C',
//     questionNumber: 2,
//     choiceQuestion: [
//       C_icon2,
//       '최근에 작업한 결과물에 만족하고 있나요?',
//       `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
//     ],
//   },
//   {
//     questionType: 'C',
//     questionNumber: 2,
//     inputQuestion: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
//   },
//   {
//     questionType: 'B',
//     questionNumber: 1,
//     choiceQuestion: [
//       B_icon1,
//       '현재 업무가 본인의 목표(꿈)을 달성하는데 도움이 된다고 생각하시나요?',
//       `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
//     ],
//   },
//   {
//     questionType: 'B',
//     questionNumber: 1,
//     inputQuestion: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
//   },
//   {
//     questionType: 'B',
//     questionNumber: 2,
//     choiceQuestion: [
//       B_icon2,
//       '현재 업무를 더 잘하기 위한 노력을 한적이 있나요?',
//       `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
//     ],
//   },
//   {
//     questionType: 'B',
//     questionNumber: 2,
//     inputQuestion: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
//   },
//   {
//     questionType: 'A',
//     questionNumber: 1,
//     choiceQuestion: [
//       A_icon1,
//       '팀의 목표와 방향성에 대해 분명하게 알고 있나요?',
//       `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
//     ],
//   },
//   {
//     questionType: 'A',
//     questionNumber: 1,
//     inputQuestion: [`그렇게 생각한 이유가 무엇인가요? \n 간단하게 한문장 정도로 작성부탁드려요 :)`],
//   },
//   {
//     questionType: 'A',
//     questionNumber: 2,
//     choiceQuestion: [
//       A_icon2,
//       '팀에서 본인의 의견을 제시하는거에 있어서 주저하거나 망설인 경험이 있나요?',
//       `1점 - 전혀 그렇지 않다. \n 2점 - 그렇지 않다.\n 3점 - 보통이다. \n 4점 - 그렇다. \n 5점 - 매우 그렇다. \n 질문에 대해 본인이 느끼는 정도를 점수로 선택해주세요!`,
//     ],
//   },
//   {
//     questionType: 'A',
//     questionNumber: 2,
//     inputQuestion: [`그렇게 생각한 이유가 무엇인가요?\n간단하게 한문장 정도로 작성부탁드려요 :)`],
//   },
//   {
//     questionType: 'End',
//     questionNumber: 0,
//     question: [
//       End_icon,
//       '지금까지 성실히 티타임에 응해주셔서\n정말 감사해요🙌',
//       '티타임을 통해 팀과 자신을 다시 한번\n돌아볼 수 있는 시간이 되었길 바라요😀',
//       '개인 결과 페이지에서 결과를 확인해보세요!',
//     ],
//   },
// ];
