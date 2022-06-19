import * as React from 'react';

interface BoardProps {
  ButtonComponent: React.ComponentType;
}

const Board: React.FC<BoardProps> = ({ ButtonComponent }) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const [elements, setElements] = React.useState<number>(0);
  // Constants
  const widthElement = 40;
  const buttonsArea = 1454.4; // width: 40.4px height: 36px

  React.useEffect(() => {
    const width = divRef.current?.clientWidth || 0;
    const height = window.innerHeight - 136;
    setElements(Math.round((width * height) / buttonsArea));
  }, [divRef.current]);

  return (
    <div
      ref={divRef}
      style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${widthElement}px, 1fr))` }}
    >
      {[...Array(elements).keys()].map((el) => (
        <ButtonComponent key={el} />
      ))}
    </div>
  );
};

export { Board };
