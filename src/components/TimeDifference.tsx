import React from 'react';
import { parseISO } from 'date-fns/esm';
import { formatDistanceToNow } from 'date-fns';

interface TimeDifferenceProps {
  timestamp: string;
}

const TimeDifferenceComponent: React.FC<TimeDifferenceProps> = ({
  timestamp,
}) => {
  const [timeDifference, setTimeDifference] = React.useState('');
  const [, setDiffInMinutes] = React.useState<number>(0);

  React.useEffect(() => {
    // Convert the given timestamp to a Date object
    const parsedTimestamp = parseISO(timestamp);
    // Get the current date and time
    const currentTime = new Date();

    // Calculate the time difference in minutes
    const minutesDifference = Math.floor(
      (currentTime.getTime() - parsedTimestamp.getTime()) / (1000 * 60),
    );

    setDiffInMinutes(minutesDifference);

    // Format the time difference using date-fns
    const formattedTimeDifference = formatDistanceToNow(parsedTimestamp, {
      addSuffix: true,
    });

    setTimeDifference(formattedTimeDifference);
  }, [timestamp]);

  return <p className='text-xs md:text-sm text-gray-400'>{timeDifference}</p>;
};

export default TimeDifferenceComponent;
