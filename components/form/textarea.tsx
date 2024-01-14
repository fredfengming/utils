type Props = {
  title: string;
  id: string;
  text?: string;
};

const Textarea = ({ title, id, text }: Props) => {
  return (
    <>
      <div className="col-span-full">
        <label className="block text-sm font-medium leading-6 ">{title}</label>
        <div className="mt-2">
          <textarea
            id={id}
            name={id}
            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-opacity-0 bg-gray-900	"
          >
            {text}
          </textarea>
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-600">{title}</p>
      </div>
    </>
  );
};

export default Textarea;
