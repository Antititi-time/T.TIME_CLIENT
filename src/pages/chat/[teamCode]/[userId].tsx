import SEO from '@src/components/common/SEO';
import TopBar from '@src/components/chat/TopBar';
import ChatBody from '@src/components/chat/ChatBody';
import { useRouter } from 'next/router';

function Chat() {
  const router = useRouter();

  return (
    <>
      <SEO title="T.time | 팀과 내가 함께 성장하는 시간" />
      <TopBar teamName={router.query.teamName} />
      <ChatBody />
    </>
  );
}

export default Chat;
