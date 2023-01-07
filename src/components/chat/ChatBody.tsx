import { CHAT_QUESTION_LIST } from '@src/constants/chat/chatQuestion';
// import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';
// import { COLOR } from '@src/styles/color';
// import { FONT_STYLES } from '@src/styles/fontStyle';
import AdminProfile from './AdminProfile';

function ChatBody() {
  let newQuestionList: any[] | undefined = [];
  return (
    <>
      {CHAT_QUESTION_LIST.map((questions) => {
        if (questions.inputQuestion) {
          newQuestionList = questions.inputQuestion;
        } else {
          newQuestionList = questions.choiceQuestion;
        }
        console.log(newQuestionList);
        {
          newQuestionList?.map((question,index) => (
            <p key={index}>sdfdfd</p>)
            // index === 0 ? (
            //   <>
            //     <AdminProfile />
            //     <ImageDiv src={question} alt="이모티콘" className="Emoticon" />
            //   </>
            // ) : (
            //   <div key={index}>{question}</div>
            // );
          });
        }
    </>

    // <div>
    //   <StList>
    //     <>
    //       <AdminProfile />
    //       {CHAT_QUESTION_LIST[1].choiceQuestion?.map((questionD, index) => (
    //         <>
    //           {index == 0 ? (
    //             <ImageDiv src={questionD} alt="img" className="D_icon2" />
    //           ) : (
    //             <StAdminChat key={index}>{questionD}</StAdminChat>
    //           )}
    //         </>
    //       ))}
    //     </>
    //   </StList>
    // </div>
  );
}

export default ChatBody;

// const StList = styled.div`
//   margin-top: 150px;
//   white-space: pre-line;
//   .D_icon2 {
//     margin-left: 6.2rem;
//   }
// `;

// const StAdminChat = styled.div`
//   display: inline-block;
//   width: auto;
//   height: 100%;
//   margin: 0 6.2rem 0.6rem 7.6rem;
//   padding: 0.8rem 1.2rem;
//   background-color: ${COLOR.BLUE_2};
//   border-radius: 1rem;
//   color: ${COLOR.BLACK};
//   ${FONT_STYLES.NEXON_R_13};
// `;
