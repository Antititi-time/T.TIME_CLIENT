import SEO from '@src/components/common/SEO';
import TopBar from '@src/components/chat/TopBar';
import ChatBody from '@src/components/chat/ChatBody';
import { useRouter } from 'next/router';

function Chat() {
  const router = useRouter();

  return (
    <>
      <SEO />
      <TopBar teamName={router.query.teamName} />
      <ChatBody />
    </>
  );
}

export default Chat;
