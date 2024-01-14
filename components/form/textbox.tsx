import { ChangeEventHandler } from "react";

type Props = {
  title: string;
  text?: string;
  id: string;
  onChange?: (text: string) => void;
};

const TextBox = ({ title, text, onChange }: Props) => {
  return (
    <>
      <div className="sm:col-span-4">
        <label className="block text-sm font-medium leading-6 ">{title}</label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <span className="flex select-none items-center pl-3 sm:text-sm">
              {title}
            </span>
            <input
              type="text"
              name="{title}"
              id="{id}"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder={title}
              onChange={(e) => {
                if (onChange) {
                  onChange(e.target.value);
                }
              }}
              value={text}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TextBox;
