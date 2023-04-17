interface IBar {
  animationDuration: number;
  progress: number;
}

export const Bar = ({ animationDuration, progress }: IBar) => {
  return (
    <div
      className="bar-wrapper"
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin-left ${animationDuration}ms linear`,
      }}
    ></div>
  );
};
