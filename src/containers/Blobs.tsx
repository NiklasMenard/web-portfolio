import styled from 'styled-components';
import KUTE from 'kute.js';
import { useEffect } from 'react';

const Blobs = () => {
  useEffect(() => {
    KUTE.fromTo(
      '#blob1',
      { path: '#blob1' },
      { path: '#blob2' },
      { repeat: 999, duration: 3000, yoyo: true }
    ).start();

    KUTE.fromTo(
      '#blob3',
      { path: '#blob3' },
      { path: '#blob4' },
      { repeat: 999, duration: 3000, yoyo: true }
    ).start();
  }, []);

  return (
    <BlobLayer>
      <GreenBlobs
        id="visual"
        viewBox="0 0 900 675"
        width="30rem"
        height="30rem"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g transform="translate(406.1788600961776 321.17339231564574)">
          <path
            id="blob1"
            d="M139.7 -111.6C195.9 -83.4 266.7 -41.7 274.9 8.1C283 58 228.5 116 172.2 144.1C116 172.2 58 170.5 -7.1 177.6C-72.1 184.6 -144.2 200.5 -172.4 172.4C-200.6 144.2 -184.8 72.1 -170.9 13.9C-157 -44.3 -145 -88.6 -116.8 -116.8C-88.6 -145 -44.3 -157 -1.3 -155.7C41.7 -154.4 83.4 -139.8 139.7 -111.6"
            fill="#43C59E"
          ></path>
        </g>
        <g transform="translate(481.81144380501553 334.8412755343727)">
          <path
            id="blob2"
            d="M164 -189.1C203.7 -162.1 221 -102.1 222.1 -46.5C223.3 9.2 208.2 60.3 183.9 109.6C159.5 158.9 125.9 206.3 84.1 214.2C42.3 222 -7.7 190.3 -57.4 167.8C-107.2 145.4 -156.6 132.2 -202.4 96C-248.2 59.8 -290.3 0.6 -285.4 -54.3C-280.5 -109.3 -228.6 -160 -173.2 -184.2C-117.8 -208.4 -58.9 -206.2 1.6 -208.1C62.1 -210.1 124.3 -216.1 164 -189.1"
            fill="#43C59E"
          ></path>
        </g>
      </GreenBlobs>

      <OrangeBlobs
        id="visual"
        viewBox="0 0 900 675"
        width="30rem"
        height="30rem"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g transform="translate(406.1788600961776 321.17339231564574)">
          <path
            id="blob3"
            d="M139.7 -111.6C195.9 -83.4 266.7 -41.7 274.9 8.1C283 58 228.5 116 172.2 144.1C116 172.2 58 170.5 -7.1 177.6C-72.1 184.6 -144.2 200.5 -172.4 172.4C-200.6 144.2 -184.8 72.1 -170.9 13.9C-157 -44.3 -145 -88.6 -116.8 -116.8C-88.6 -145 -44.3 -157 -1.3 -155.7C41.7 -154.4 83.4 -139.8 139.7 -111.6"
            fill="#DD6E42"
          ></path>
        </g>
        <g transform="translate(481.81144380501553 334.8412755343727)">
          <path
            id="blob4"
            d="M164 -189.1C203.7 -162.1 221 -102.1 222.1 -46.5C223.3 9.2 208.2 60.3 183.9 109.6C159.5 158.9 125.9 206.3 84.1 214.2C42.3 222 -7.7 190.3 -57.4 167.8C-107.2 145.4 -156.6 132.2 -202.4 96C-248.2 59.8 -290.3 0.6 -285.4 -54.3C-280.5 -109.3 -228.6 -160 -173.2 -184.2C-117.8 -208.4 -58.9 -206.2 1.6 -208.1C62.1 -210.1 124.3 -216.1 164 -189.1"
            fill="#DD6E42"
          ></path>
        </g>
      </OrangeBlobs>
    </BlobLayer>
  );
};

const BlobLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;

  svg {
    position: fixed;
  }

  #blob2,
  #blob4 {
    visibility: hidden;
  }
`;

const GreenBlobs = styled.svg`
  left: 0;

  @media only screen and (max-width: 760px) {
    left: -30%;
    bottom: 50%;
  }
`;

const OrangeBlobs = styled.svg`
  right: 0;
  bottom: 45%;

  @media only screen and (max-width: 760px) {
    bottom: 10%;
    right: -30%;
  }
`;

export default Blobs;
