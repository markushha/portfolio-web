import { useNProgress } from "@tanem/react-nprogress";

import { Bar } from "./Bar";
import { Container } from "./Container";

interface IProgress {
  isAnimating: boolean
};

export const Progress = ({ isAnimating }: IProgress) => {
  const { animationDuration, isFinished, progress } = useNProgress({isAnimating});

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  )
}