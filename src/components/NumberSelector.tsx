import { useState } from "react";

const NumberSelector = () => {
  const numbers = [2, 3, 4, 5, 6, 7, 8];
  const [selected, setSelected] = useState(numbers[0]);

  return (
    <form className="flex flex-wrap items-center h-14">
      {numbers.map((number) => (
        <SelectorElement
          selected={selected}
          onChange={(e) => setSelected(parseInt(e.target.value))}
          key={number}
          element={number}
        />
      ))}
    </form>
  );
};
export default NumberSelector;

const SelectorElement = ({
  element,
  selected,
  onChange,
}: {
  element: number;
  selected: number;
  onChange: (e: any) => void;
}) => {
  const elementClass =
    selected === element
      ? "text-3xl bg-gradient-to-tr from-secondary to-primary"
      : "text-xl bg-primary";

  return (
    <label
      className={`${elementClass} gradient-to-text cursor-pointer py-2 px-4 hover-transition font-semibold  hover:text-3xl`}
    >
      <input
        type="radio"
        name="player-count"
        value={element}
        checked={selected === element}
        onChange={onChange}
        className="hidden"
      />
      {element}
    </label>
  );
};
