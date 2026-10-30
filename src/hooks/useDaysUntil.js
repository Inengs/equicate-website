import { useEffect, useState } from "react";

const DAY = 24 * 60 * 60 * 1000;

export function useDaysUntil(target) {
  const calc = () => Math.max(0, Math.ceil((target.getTime() - Date.now()) / DAY));
  const [days, setDays] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setDays(calc()), 60 * 60 * 1000); // hourly is plenty
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return days;
}