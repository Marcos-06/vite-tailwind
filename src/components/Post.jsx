/* eslint-disable react/prop-types */
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState(["cumpricadeira"]);

  const [newComment, setNewComment] = useState("");

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleSubmit(event) {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment("");
  }

  function handleNewComment(event) {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("Por favor, preencha o campo de comentário.");
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => { return comment !== commentToDelete });
    setComments(commentsWithoutDeletedOne);
  }



  return (
    <article className="bg-zinc-800 rounded-lg p-10 mb-8">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar border="true" src={author.avatarUrl} />
          <div className="flex items-center flex-col gap-1">
            <strong className="text-zinc-100 ">{author.name}</strong>
            <span className="text-zinc-400 text-sm">{author.role}</span>
          </div>
        </div>

        <time className="text-zinc-400 justify" title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className="text-zinc-300 mt-6 grid gap-4">
        {content.map(line => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return <p key={line.content} className="text-green-500 hover:text-green-300"><a href="#">{line.content}</a></p>
          }
        })}

      </div>

      <form onSubmit={handleSubmit} className="w-full mt-6 pt-6 border-t border-zinc-600">
        <strong className="text-zinc-100">
          Deixe seu Feedback
        </strong>

        <textarea className="w-full bg-zinc-900 h-24 p-4 rounded-lg text-zinc-100 resize-none mt-4"
          placeholder="Deixe um Comentario"
          name="comment"
          onChange={handleNewComment}
          value={newComment}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <button disabled={newComment.length === 0} className="py-4 px-6 mt-4 rounded-lg bg-green-600 text-white font-bold cursor-pointer hover:bg-green-400" type="submit">
          Publicar
        </button>
      </form>

      <div className="">
        {comments.map(comment => {
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
        })}
      </div>

    </article>
  )
}