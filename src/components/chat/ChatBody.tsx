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
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function ChatBody() {
  const router = useRouter();
  const teamCode = router.asPath.split('/')[2];
  const [chat, setChat] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [textCount, setTextCount] = useState(0);
  const [input, setInput] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (textCount < CHAT_QUESTION_LIST[index].questions.length) {
        const newlist = chat.concat(CHAT_QUESTION_LIST[index].questions[textCount]);
        setChat(newlist);
        setTextCount(textCount + 1);
      }
    }, 1000);
    if (textCount == CHAT_QUESTION_LIST[index].questions.length) {
      setInput(true);
      setTextCount(0);
      // setindex(index + 1);
    }
  }, [chat, index]);

  return (
    <StChatBody>
      <ChatStartTalk />
      {chat.map((questions: string, index: number) => {
        return typeof questions !== 'string' ? (
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

      {input == false ? (
        <></>
      ) : chat[chat.length - 1].includes('한문장') ? (
        <InputAnswer setIndex={setIndex} setInput={setInput} index={index} teamCode={teamCode} setChat={setChat} />
      ) : chat[chat.length - 1].includes('이제') ? (
        <FirstChoiceAnswer
          setIndex={setIndex}
          setInput={setInput}
          index={index}
          teamCode={teamCode}
          setChat={setChat}
        />
      ) : (
        <ChoiceAnswer setIndex={setIndex} setInput={setInput} index={index} teamCode={teamCode} setChat={setChat} />
      )}
    </StChatBody>
  );
}

export default ChatBody;

const StChatBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8.1rem;
  padding-bottom: 7rem;
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
