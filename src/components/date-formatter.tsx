import { parseISO, format } from "date-fns";

type Props = {
  dateIsoString: string;
};

const DateFormatter = ({ dateIsoString }: Props) => {
  const date = parseISO(dateIsoString);
  return <time dateTime={dateIsoString}>{format(date, "LLLL	d, yyyy")}</time>;
};

export default DateFormatter;
