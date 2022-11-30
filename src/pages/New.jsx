import React, { useEffect, useState } from "react";
import Navbar from "../conponents/Navbar";
import blog from "../asset/blog.png";
import { AddUser, useFetch } from "../auth/functions";
import { useNavigate } from "react-router-dom";
import { toastWarnNotify } from "../helper/Toastfy";
import { useSelector } from "react-redux";

const New = () => {
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    imgUrl: "",
    content: "",
  };
  const { user } = useSelector((state) => state.auth);
  const [info, setInfo] = useState(initialValues);
  const [count, setCount] = useState();
  const [comment, setComment] = useState(["sadık"]);
  const [like, setLike] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    let time = new Date();
    let date = new Date(
      `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
    );
    let history = date.toLocaleDateString("tr-TR", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    if (info.title && info.content && info.imgUrl) {
      if (count?.length >20) {
        setComment(history)
        AddUser(info, user, history, like, comment);
        setInfo(initialValues);
        navigate("/");
      } else {
        toastWarnNotify("Contente minimum 20 harf yazılmalıdır");
      }
    } else {
      toastWarnNotify("Form Boş Bırakılamaz");
    }
    
  };

  const { isLoading, cardList } = useFetch();
  useEffect(() => {
    setCount(info.content.split(""));
  }, [info]);

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center mt-20 gap-4">
          <img src={blog} alt="" />
          <input
            type="text"
            placeholder="Title *"
            className="w-[400px] border-4 outline-none py-2 indent-2 shadow-md shadow-black rounded-md"
            value={info.title}
            onChange={(e) => setInfo({ ...info, title: e.target.value })}
          />
          <input
            type="url"
            placeholder="Image URL *
"
            className="w-[400px] border-4 outline-none py-2 indent-2 shadow-md shadow-black rounded-md"
            value={info.imgUrl}
            onChange={(e) => setInfo({ ...info, imgUrl: e.target.value })}
          />
          <div className="relative">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className=" w-[400px] h-[300px] border-4 outline-none py-2 indent-2 shadow-md shadow-black rounded-md"
              placeholder="Content *"
              value={info.content}
              onChange={(e) => setInfo({ ...info, content: e.target.value })}
              wrap="hard"
            ></textarea>

            <p className="absolute bottom-4 right-4">
              {`3000/ ${count?.length}`}
            </p>
          </div>
        </div>
        <button className="py-2 px-4 bg-teal-600 block  mx-auto mt-2 rounded-lg  text-white font-bold hover:bg-teal-400 hover:text-black duration-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default New;