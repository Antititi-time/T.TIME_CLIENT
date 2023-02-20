import { CHAT_QUESTION_LIST } from '@src/constants/chat/chatQuestion';
import styled, { keyframes } from 'styled-components';
import ImageDiv from '../common/ImageDiv';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import AdminProfile from './AdminProfile';
import ChatStartTalk from './ChatStartTalk';
import ChoiceAnswer from './ChoiceAnswer';
import InputAnswer from './InputAnswer';
import FirstChoiceAnswer from './FirstChoiceAnswer';
import WatchMyResultButton from './WatchMyResultButton';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { StaticImageData } from 'next/image';

function ChatBody() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [chat, setChat] = useState<(string | StaticImageData)[]>([]);
  const [index, setIndex] = useState(0);
  const [grade, setGrade] = useState(0);
  const [textCount, setTextCount] = useState(0);
  const [input, setInput] = useState(false);
  const [end, setEnd] = useState(false);
  const router = useRouter();
  const teamId = router.asPath.split('/')[2];
  const userId = router.asPath.split('/')[3].split('?')[0];

  useEffect(() => {
    setTimeout(() => {
      if (textCount < CHAT_QUESTION_LIST[index].questions.length) {
        if (scrollRef.current !== null) {
          scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        }
        const newlist = chat.concat(CHAT_QUESTION_LIST[index].questions[textCount]);
        setChat(newlist);
        setTextCount(textCount + 1);
      }
    }, 700);
    if (textCount == CHAT_QUESTION_LIST[index].questions.length) {
      if (CHAT_QUESTION_LIST[index].questionType == 'End') {
        setEnd(true);
      } else {
        setInput(true);
        setTextCount(0);
      }
      if (scrollRef.current !== null) {
        if (CHAT_QUESTION_LIST[index].questionType == 'End') {
          scrollRef.current.style.paddingBottom = '11.5rem';
          scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        } else if (CHAT_QUESTION_LIST[index].questions.includes('한문장')) {
          scrollRef.current.style.paddingBottom = '8.5rem';
          scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        } else {
          scrollRef.current.style.paddingBottom = '18vh';
          scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        }
      }
    }
  }, [chat, index]);

  return (
    <StChatWrapper>
      <StChatBody ref={scrollRef}>
        <ChatStartTalk />
        {chat.map((questions: string | StaticImageData, index: number) => {
          return typeof questions === 'object' ? (
            <StEmoticonWrapper key={index}>
              <AdminProfile />
              <ImageDiv src={questions} alt="주최자 이모티콘" className="emoticon" fill={true} />
            </StEmoticonWrapper>
          ) : questions[0] == 'A' ? (
            <StAnswerWrapper key={index}>
              <StAnswer>
                <StPosition>{questions.substring(1)}</StPosition>
              </StAnswer>
            </StAnswerWrapper>
          ) : questions.includes('한문장') ? (
            <>
              <AdminProfile />
              <StInputQuestion key={index}>{questions}</StInputQuestion>
            </>
          ) : (
            <StAdminChat key={index}>{questions}</StAdminChat>
          );
        })}
        {end && <WatchMyResultButton userId={userId} teamId={teamId} />}

        {input == false ? (
          <></>
        ) : String(chat[chat.length - 1]).includes('한문장') ? (
          <InputAnswer
            key={index}
            setIndex={setIndex}
            setInput={setInput}
            index={index}
            teamId={teamId}
            setChat={setChat}
            grade={grade}
            userId={Number(userId)}
          />
        ) : String(chat[chat.length - 1]).includes('이제') ? (
          <FirstChoiceAnswer key={index} setIndex={setIndex} setInput={setInput} index={index} setChat={setChat} />
        ) : (
          <ChoiceAnswer key={index} setIndex={setIndex} setInput={setInput} setChat={setChat} setGrade={setGrade} />
        )}
      </StChatBody>
    </StChatWrapper>
  );
}

export default ChatBody;

const StChatWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${COLOR.IVORY_1};
  z-index: 1;
`;

const StEmoticonWrapper = styled.div``;
const chatEmoticon = () => keyframes`
  from {
    transform: translate(0%,7%);
  } 50% {
    transform: translate(0%,-7%);
  }100%{
    transform: translate(0%,0%);
  }`;

const chatText = () => keyframes`
from {
  transform: translate(0%,7%);
} 50% {
  transform: translate(0%,-7%);
}100%{
  transform: translate(0%,0%);
}`;

const StChatBody = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  z-index: 2;

  .emoticon {
    position: relative;
    width: 14.8rem;
    height: 14.8rem;
    margin: -1.5rem 18rem 1.2rem 6.2rem;
    animation: ${chatEmoticon} 1s linear alternate;
  }
`;

const StAdminChat = styled.div`
  display: inline-block;
  width: fit-content;
  height: 100%;
  padding: 0.8rem 1.2rem;
  margin: 0 7.3rem 0.6rem 6.2rem;
  border-radius: 1rem;
  background-color: ${COLOR.BLUE_2};
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_R_13};
  animation: ${chatText} 1s linear alternate;
`;

const StInputQuestion = styled.div`
  display: inline-block;
  position: relative;
  top: -1.2rem;
  width: auto;
  height: 100%;
  padding: 0.8rem 1.2rem;
  margin: 1rem 7.3rem 0rem 6.2rem;
  border-radius: 1rem;
  background-color: ${COLOR.BLUE_2};
  color: ${COLOR.BLACK};
  animation: ${chatText} 1s linear alternate;
  ${FONT_STYLES.NEXON_B_20};

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
  margin-top: 1.6rem;
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
  margin-bottom: 1.8rem;
  border-radius: 1rem;
  background-color: ${COLOR.ORANGE_2};
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_R_14};
  margin-right: 1.2rem;
  :after {
    position: absolute;
    top: -0.32rem;
    right: -0.77rem;
    transform: rotate(46deg);
    border-top: 0rem solid transparent;
    border-left: 0rem solid transparent;
    border-right: 1.5rem solid transparent;
    border-bottom: 1.5rem solid ${COLOR.ORANGE_2};
    content: '';
  }
`;
