/* eslint-disable react/prop-types */

interface AvatarProps {
  border?: boolean;
  src: string
}

export function Avatar({ border, src }: AvatarProps) {
  return (
    <div>
      <img
        className={`"w-12 h-12 rounded-lg ${border === true ? "border-4 border-zinc-500 outline-2 outline outline-green-500" : ""} box-content"`}
        src={src}
        alt="Avatar"
      />
    </div>
  );
}