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

function ChatBody() {
  const [chat, setChat] = useState(['']);
  const [index, setIndex] = useState(0);
  const [textCount, setTextCount] = useState(0);
  const [input, setInput] = useState(false);
  const [test, setTest] = useState('');

  useEffect(() => {
    console.log(index);
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
        ) : questions.includes('1점') ? (
          <>
            <AdminProfile />
            <StInputQuestion key={index}>{questions}</StInputQuestion>
          </>
        ) : (
          <>
            <StAdminChat key={index}>{questions}</StAdminChat>
          </>
        );
      })}

      {input == false ? (
        <></>
      ) : chat[chat.length - 1].includes('한문장') ? (
        <InputAnswer />
      ) : chat[chat.length - 1].includes('이제') ? (
        <FirstChoiceAnswer setIndex={setIndex} setInput={setInput} index={index} />
      ) : (
        <ChoiceAnswer />
      )}
    </StChatBody>
  );
}

export default ChatBody;

const StChatBody = styled.div`
  display: flex;
  flex-direction: column;
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
