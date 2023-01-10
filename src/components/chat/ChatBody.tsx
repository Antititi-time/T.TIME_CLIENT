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
import WatchMyResultButton from './WatchMyResultButton';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function ChatBody() {
  const [chat, setChat] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [grade, setGrade] = useState(0);
  const [textCount, setTextCount] = useState(0);
  const [input, setInput] = useState(false);
  const [end, setEnd] = useState(false);
  const router = useRouter();
  const teamCode = router.asPath.split('/')[2];
  const userCode = router.asPath.split('/')[3];

  useEffect(() => {
    setTimeout(() => {
      if (textCount < CHAT_QUESTION_LIST[index].questions.length) {
        const newlist = chat.concat(CHAT_QUESTION_LIST[index].questions[textCount]);
        setChat(newlist);
        setTextCount(textCount + 1);
      }
    }, 500);
    if (textCount == CHAT_QUESTION_LIST[index].questions.length) {
      if (CHAT_QUESTION_LIST[index].questionType === 'End') {
        setEnd(true);
      } else {
        setInput(true);
        setTextCount(0);
      }
    }
  }, [chat, index]);

  return (
    <StChatBody>
      <ChatStartTalk />
      {chat.map((questions: string, index: number) => {
        return typeof questions === 'object' ? (
          <>
            <AdminProfile />
            <ImageDiv key={index} src={questions} alt="주최자 이모티콘" className="emoticon" />
          </>
        ) : questions[0] == 'A' ? (
          <StAnswerWrapper>
            <StAnswer>
              <StPosition>{questions.substring(1)}</StPosition>
            </StAnswer>
          </StAnswerWrapper>
        ) : questions.includes('한문장') ? (
          <StInputQuestion key={index}>{questions}</StInputQuestion>
        ) : (
          <StAdminChat key={index}>{questions}</StAdminChat>
        );
      })}
      {end && <WatchMyResultButton userId={userCode} teamId={teamCode} />}

      {input == false ? (
        <></>
      ) : chat[chat.length - 1].includes('한문장') ? (
        <InputAnswer
          setIndex={setIndex}
          setInput={setInput}
          index={index}
          teamCode={teamCode}
          setChat={setChat}
          grade={grade}
        />
      ) : chat[chat.length - 1].includes('이제') ? (
        <FirstChoiceAnswer setIndex={setIndex} setInput={setInput} index={index} setChat={setChat} />
      ) : (
        <ChoiceAnswer setIndex={setIndex} setInput={setInput} setChat={setChat} setGrade={setGrade} />
      )}
    </StChatBody>
  );
}

export default ChatBody;

const StChatBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8.1rem;
  padding-bottom: 7.6rem;
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

const StAnswerWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const StPosition = styled.div`
  display: inline-block;
`;

const StAnswer = styled.div`
  display: inline-block;
  position: relative;
  max-width: 23.1rem;
  width: auto;
  height: auto;
  padding: 0.8rem 1.2rem;

  /* margin: 1.6rem 0rem 0rem 6.2rem; */
  border-radius: 1rem;
  background-color: ${COLOR.ORANGE_2};
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_R_14};
  margin-right: 1.2rem;
  :after {
    position: absolute;
    top: -0.67rem;
    right: -0.7rem;
    transform: rotate(46deg);
    border-top: 0rem solid transparent;
    border-left: 0rem solid transparent;
    border-right: 1.5rem solid transparent;
    border-bottom: 1.5rem solid ${COLOR.ORANGE_2};
    content: '';
  }
`;
