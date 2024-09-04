import {ImgHTMLAttributes} from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  border?: boolean;
}

export function Avatar({ border, ...props }: AvatarProps) {
  return (
    <div>
      <img
        className={`"w-12 h-12 rounded-lg ${border === true ? "border-4 border-zinc-500 outline-2 outline outline-green-500" : ""} box-content"`}
        {...props}
      />
    </div>
  );
}