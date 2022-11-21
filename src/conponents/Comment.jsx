import React from "react";
const Comment = ({ item }) => {
    
  return (
    <div className="bg-gray-500 text-white font-bold  text-lg pl-2 mt-2 flex gap-8 items-center pb-5 relative">
        <div>
        <svg width="40" height="40" viewBox="0 0 24 24">
        <path fill="orange" d="M18 14V6h-5v8l2.5-1.5z" />
        <path
          fill="black"
          d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
        />
      </svg>
        </div>
      
      <div className="pr-5">
        <p
          className="pt-2 font-mono font-bold "
          style={{
            width: "100%",
            wordWrap: "break-word",
          }}
        >
          *{item.comments}
        </p>
        <p className="font-normal text-[.8rem] text-end  text-black absolute bottom-0 right-10">
          Created by *{item.email}
        </p>
      </div>
    </div> 
  );
};

export default Comment;