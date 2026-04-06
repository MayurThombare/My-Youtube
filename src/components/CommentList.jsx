import CommentItem from "./CommentItem";

const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <div key={index}>
          <CommentItem data={comment} key={index} />
          {comment.replies && (
            <div className="pl-5 border border-l-black ml-5 border-gray-200">
              <CommentList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};
export default CommentList;