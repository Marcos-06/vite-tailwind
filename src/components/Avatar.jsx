/* eslint-disable react/prop-types */
export function Avatar({ border, src }) {
  return (
    <div>
      <img
        border={border}
        className={`"w-12 h-12 rounded-lg ${border === "true" ? "border-4 border-zinc-500 outline-2 outline outline-green-500" : ""} box-content"`}
        src={src}
        alt="Avatar"
      />
    </div>
  );
}