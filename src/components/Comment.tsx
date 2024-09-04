/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment(props: CommentProps) {
  const [likes, setLikes] = useState(0);

  function handleDeleteComment() {
    props.onDeleteComment(props.content)
  }
  function handleLike() {
    setLikes((state => state + 1));
  }

  return (
    <div className="flex mt-6 gap-4">
      <Avatar src="https://github.com/Marcos-06.png" />

      <div className="flex-1">
        <div className="bg-zinc-700 rounded-lg p-4">
          <header className="flex items-start justify-between">
            <div className="flex flex-col">
              <strong className="text-zinc-100 text-sm">Usuario</strong>
              <time className="text-zinc-400 justify text-xs" title="2024-05-11 meiodiapas4" dateTime="2024-05-11 meiodiapas4">Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentarios" className="bg-transparent text-zinc-400 cursor-pointer hover:text-red-500">
              <Trash size={24} />
            </button>
          </header>

          <p className="mt-4 text-zinc-300">{props.content}</p>
        </div>
        <footer className="mt-4">
          <button onClick={handleLike} className="flex text-gray-400 cursor-pointer items-center hover:text-green-300">
            <ThumbsUp className="mr-2" />
            Aplaudir
            <span className="before:p-1 before:content-['\2022']">{likes}</span>
          </button>
        </footer>

      </div>
    </div>
  )
}