import { CHAT_QUESTION_LIST } from '@src/constants/chat/chatQuestion';
import styled from 'styled-components';

function ChatBody() {
  console.log(CHAT_QUESTION_LIST[0].question);
  return (
    <div>
      <StList></StList>
    </div>
  );
}

export default ChatBody;

const StList = styled.div`
  margin-top: 150px;
  white-space: pre-line;
`;
