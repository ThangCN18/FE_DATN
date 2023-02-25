import { FC, Fragment } from "react";

export interface TextProps {
  title: string;
}

export const Text: FC<TextProps> = (props) => {
  return (
    <Fragment>
      <div className="flex justify-center">
        <div className="font-bold text-red my-5">{props.title}</div>
      </div>
    </Fragment>
  );
};
