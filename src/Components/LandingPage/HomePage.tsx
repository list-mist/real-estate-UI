import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

interface SlideProps {
    transform: number; // Define the custom prop 'transform'
  }
  interface InnerProps {
    backgroundColor: string; // Define the custom prop 'backgroundColor'
  }
  
  const Inner = styled.div<InnerProps>`
    height: 25rem;
    width: 18rem;
    border-radius: 3rem;
    background-color: ${(props) => props.backgroundColor};
    position: relative;
    transform: skewX(-10deg);
  
    &::after,
    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 3rem;
      top: 0;
      left: 0;
    }
  
    &::after {
      transform: translate(4rem, -1rem);
    }
  
    &::before {
      transform: translate(2rem, -2rem);
    }
  `;
  
  const Slide = styled.div<SlideProps>`
    height: 55rem;
    display: flex;
    width: 500%;
    transition: all 0.25s ease-in;
    transform: translateX(-${(props) => props.transform}%); // Now 'transform' is recognized as a custom prop
  `;

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 5rem;
  background-color: #000;
  color: #fff;
  padding: 8rem;
`;



const SlideBox = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Background = styled.div`
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.2);
  width: 55%;
  transform: skewX(7deg);
  position: absolute;
  height: 100%;
  left: -10%;
  padding-left: 20rem;
  transform-origin: 0 100%;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: inherit;
    pointer-events: none;
    transform: skewX(10deg);
  }
`;

const Details = styled.div`
  padding: 5rem;
  padding-left: 10rem;
  z-index: 100;
  grid-column: 1/span 1;
  grid-row: 1/-1;

  h1 {
    font-size: 3.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    display: inline-block;
    font-size: 1.3rem;
    color: #B5B4B4;
    margin-bottom: 2rem;
    margin-right: 5rem;
  }

  button {
    padding: 1rem 3rem;
    color: #fff;
    border-radius: 2rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    opacity: 0.8;
  }

  button:focus {
    outline: none;
    border: none;
  }
`;

const Illustration = styled.div`
  grid-column: 2/-1;
  grid-row: 1/-1;
  justify-self: center;
`;



const PrevButton = styled.button`
  z-index: 10000;
  position: absolute;
  width: 4rem;
  cursor: pointer;
  opacity: 0.2;
  transition: all 0.3s ease;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);

  &:hover {
    opacity: 1;
  }
`;

const NextButton = styled.button`
  z-index: 10000;
  position: absolute;
  width: 4rem;
  cursor: pointer;
  opacity: 0.2;
  transition: all 0.3s ease;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
  &:hover {
    opacity: 1;
  }
`;

const Trail = styled.div`
  z-index: 10000;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  text-align: center;
  font-size: 1.5rem;

  div {
    padding: 2rem;
    border-top: 3px solid #fff;
    cursor: pointer;
    opacity: 0.3;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.6;
    }
  }

  &.active {
    opacity: 1 !important;
  }
`;

const Slider = () => {
  const [value, setValue] = useState(0);
  const [trailValue, setTrailValue] = useState(0);
  const interval = 4000;

  useEffect(() => {
    const start = setInterval(() => slide('increase'), interval);
    return () => clearInterval(start);
  }, []);

  const slide = (condition: 'increase' | 'decrease') => {
    let start: NodeJS.Timeout | undefined; // Declare start as a NodeJS.Timeout

    if (start) {
        clearInterval(start);
    }

    condition === 'increase' ? initiateINC() : initiateDEC();
    move(value, trailValue);
    animate();

    start = setInterval(() => slide('increase'), interval);

    return () => clearInterval(start);
};


const initiateINC = () => {
    Trail.forEach((cur) => {
        cur.classList.remove('active');
    });
    setValue(value === 80 ? 0 : value + 20);
    trailUpdate();
};



  const initiateDEC = () => {
    Trail.forEach((cur: { classList: { remove: (arg0: string) => any; }; }) => cur.classList.remove('active'));
    setValue(value === 0 ? 80 : value - 20);
    trailUpdate();
  };

// Assume that 'slide' refers to the actual slider DOM element
const slide = document.querySelector(".slider");

const move = (S: number, T: number) => {
    slide.style.transform = `translateX(-${S}%`;
    Trail[T].classList.add('active');
};


  const tl = gsap.timeline({
    defaults: { duration: 0.6, ease: 'power2.inOut' },
  });

  tl.from('.bg', { x: '-100%', opacity: 0 })
    .from('p', { opacity: 0 }, '-=0.3')
    .from('h1', { opacity: 0, y: '30px' }, '-=0.3')
    .from('button', { opacity: 0, y: '-40px' }, '-=0.8');

  const animate = () => tl.restart();

  const trailUpdate = () => {
    if (value === 0) {
      setTrailValue(0);
    } else if (value === 20) {
      setTrailValue(1);
    } else if (value === 40) {
      setTrailValue(2);
    } else if (value === 60) {
      setTrailValue(3);
    } else {
      setTrailValue(4);
    }
  };

  const clickCheck = (e: { target: any; }) => {
    clearInterval(start);
    Trail.forEach((cur: { classList: { remove: (arg0: string) => any; }; }) => cur.classList.remove('active'));

    const check = e.target;
    check.classList.add('active');

    if (check.classList.contains('box1')) {
      setValue(0);
    } else if (check.classList.contains('box2')) {
      setValue(20);
    } else if (check.classList.contains('box3')) {
      setValue(40);
    } else if (check.classList.contains('box4')) {
      setValue(60);
    } else {
      setValue(80);
    }

    trailUpdate();
    move(value, trailValue);
    animate();

    const start = setInterval(() => slide('increase'), interval);

    return () => clearInterval(start);
  };

  return (
    <SliderContainer>
      <Slide transform={value}>
        <SlideBox>
          <Background />
          <Details>
            <h1>I'm the first Box</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dui lectus.
              Donec scelerisque ipsum diam, ac mattis orci pellentesque eget.
            </p>
            <button>Check Now</button>
          </Details>
          <Illustration>
            <Inner backgroundColor="#FF0077" />
          </Illustration>
        </SlideBox>

        {/* Add other slides similarly */}
      </Slide>
      <PrevButton className="prev" onClick={() => slide('decrease')}>
        Previous
      </PrevButton>
      <NextButton className="next" onClick={() => slide('increase')}>
        Next
      </NextButton>
      <Trail>
        <div className="box1 active" onClick={clickCheck}>
          1
        </div>
        <div className="box2" onClick={clickCheck}>
          2
        </div>
        <div className="box3" onClick={clickCheck}>
          3
        </div>
        <div className="box4" onClick={clickCheck}>
          4
        </div>
        <div className="box5" onClick={clickCheck}>
          5
        </div>
      </Trail>
    </SliderContainer>
  );
};

export default Slider;
