import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@material-ui/core/MobileStepper';
// @ts-ignore
import { autoPlay } from 'react-swipeable-views-utils';

interface CarouselProps {
  children: React.ReactNode[]
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Component = () => <div></div>;

const Carousel = (props: CarouselProps) => {
  const [activeStep, setActiveStep] = useState(0);
  return (
   <>
    <AutoPlaySwipeableViews
      interval={5000}
      index={activeStep}
      onChangeIndex={(index: number) => setActiveStep(index)}
    >
      {props.children}
    </AutoPlaySwipeableViews>
    <MobileStepper
      style={{width:'100%'}}
      variant="dots"
      steps={props.children.length}
      position="static"
      activeStep={activeStep}
      nextButton={<Component/>}
      backButton={<Component/>}
    />
   </>
 );
};

export default Carousel;