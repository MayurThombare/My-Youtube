
import CommentList from "./CommentList";
const CommentsContainer = () => {
  const commentData = [
    {
      name: "Akshay Thombare",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      replies :[
        {
            name: "Akshay Thombare",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
            replies :[
                {
                    name: "Akshay Thombare",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                },
                {
                    name: "Akshay Thombare",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                },
            ]
        }
      ]
    },
    {
      name: "Akshay Thombare",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    },
    {
      name: "Akshay Thombare",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    },
    {
      name: "Akshay Thombare",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    },
    {
      name: "Akshay Thombare",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    },
    {
      name: "Akshay Thombare",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    },
    {
      name: "Akshay Thombare",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    },
    {
      name: "Akshay Thombare",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    },
    {
      name: "Akshay Thombare",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    },
    {
      name: "Akshay Thombare",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    },
    {
      name: "Akshay Thombare",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    },
    {
      name: "Akshay Thombare",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    },
  ];
  return (
    <div className="p-2 m-5">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
