type Props = {
  title: string;
  id: string;
};

const Checkbox = ({ title, id }: Props) => {
  return (
    <>
      <div className="relative flex gap-x-3">
        <div className="flex h-6 items-center">
          <input
            id={id}
            name={id}
            type="checkbox"
            className="h-4 w-4 rounded focus:ring-indigo-600"
          />
        </div>
        <div className="text-sm leading-6">
          <label className="font-medium">{title}</label>
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};

export default Checkbox;
