import React from 'react';
import Lottie from 'lottie-react';
import wall from "@/public/wall.json"

const LottieAnimation = () => {
  return <Lottie animationData={wall} loop={true} />;
};

export default LottieAnimation;
