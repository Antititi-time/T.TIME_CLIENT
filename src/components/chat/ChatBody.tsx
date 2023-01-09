import { CHAT_QUESTION_LIST } from '@src/constants/chat/chatQuestion';
import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import AdminProfile from './AdminProfile';
import ChatStartTalk from './ChatStartTalk';
import ChoiceAnswer from './ChoiceAnswer';
import InputAnswer from './InputAnswer';
import FirstChoiceAnswer from './FirstChoiceAnswer';
import WatchMyResult from './WatchMyResultButton';

function ChatBody() {
  return (
    <StChatBody>
      <WatchMyResult />
      <FirstChoiceAnswer />
      <InputAnswer />
      <ChoiceAnswer />
      <ChatStartTalk />
      {CHAT_QUESTION_LIST.map((questions) => {
        if (questions.inputQuestion) {
          return questions.inputQuestion.map((question, index) => {
            return (
              <>
                <AdminProfile />
                <StInputQuestion key={index}>{question}</StInputQuestion>
              </>
            );
          });
        } else if (questions.choiceQuestion) {
          return questions.choiceQuestion?.map((question, index) => {
            if (typeof question !== 'string') {
              return (
                <>
                  <AdminProfile />
                  <ImageDiv key={question} src={question} alt="주최자 이모티콘" className="emoticon" />
                </>
              );
            } else {
              return <StAdminChat key={index}>{question}</StAdminChat>;
            }
          });
        } else {
          return questions.question?.map((question, index) => {
            if (typeof question !== 'string') {
              return (
                <>
                  <AdminProfile />
                  <ImageDiv key={question} src={question} alt="주최자 이모티콘" className="emoticon" />
                </>
              );
            } else {
              return <StAdminChat key={index}>{question}</StAdminChat>;
            }
          });
        }
      })}
    </StChatBody>
  );
}

export default ChatBody;

const StChatBody = styled.div`
  margin-top: 8.1rem;
  white-space: pre-line;
  z-index: 0;
  .emoticon {
    margin: -1.5rem 18rem 1.2rem 6.2rem;
  }
`;

const StAdminChat = styled.div`
  display: inline-block;
  width: auto;
  height: 100%;
  padding: 0.8rem 1.2rem;
  margin: 0 7.3rem 0.6rem 6.2rem;
  border-radius: 1rem;
  background-color: ${COLOR.BLUE_2};
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_R_13};
`;

const StInputQuestion = styled.div`
  display: inline-block;
  position: relative;
  top: -1.5rem;
  width: auto;
  height: 100%;
  padding: 0.8rem 1.2rem;
  margin: 0 7.3rem 0.6rem 6.2rem;
  border-radius: 1rem;
  background-color: ${COLOR.BLUE_2};
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_R_13};
  :after {
    position: absolute;
    top: -0.4rem;
    left: -0.7rem;
    transform: rotate(45deg);
    border-top: 1.5rem solid ${COLOR.BLUE_2};
    border-left: 1.5rem solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 0 solid transparent;
    content: '';
  }
`;
