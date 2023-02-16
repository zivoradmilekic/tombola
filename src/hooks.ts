import { useMemo, useState } from "react";

export const useShuffler = (length: number) => {
  const [rest, setRest] = useState<number[]>(
    Array.from({ length }, (_, i) => i + 1)
  );

  const [chosen, setChosen] = useState<number[]>([]);

  const current = useMemo(() => chosen.at(-1), [chosen]);

  const shuffle = () => {
    if (rest.length <= 0) return;

    const index = Math.floor(Math.random() * rest.length);

    setChosen([...chosen, rest[index]]);

    rest.splice(index, 1);
    setRest([...rest]);
  };

  return {
    rest,
    chosen,
    current,
    shuffle,
  };
};
