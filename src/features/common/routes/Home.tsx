import React from 'react';
import { Link } from 'react-router-dom';
import { css, cx } from '@emotion/css';

import { Button } from '@wizrnd/nx-ui';
import { env } from '@/config';

function HomePage() {
  // const {} = props;

  //     const [backgroundImg, setBackgroundImg] = React.useState("");
  //     var imgArray=new Array();
  //     imgArray[0]=img1;
  //     imgArray[1]=img2;
  //     imgArray[2]=img3;

  //   function showImage(){
  //       var imgNum=Math.round(Math.random()*(3 - 0) + 0);
  //       setBackgroundImg(imgArray[imgNum]);
  //       console.log("imgNum", imgNum);
  //       setTimeout(showImage,5000);
  //     }

  return (
    <main
      className={cx(MainPic, 'object-cover h-ch')}
      style={{
        backgroundImage: `url(${env.app.public_url}/asset/background1.jpg)`,
      }}
    >
      <div className={Title}>
        <div className={innerDiv}>
          <div>절삭공구 추천</div>
          <div>절삭공구 플랫폼</div>
          <Link to="/project">
            <Button
              variant="outlined"
              color="secondary"
              size="md"
              width={210}
              height={43}
            >
              바로가기
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default HomePage;

const MainPic = css`
  width: 100%;
  height: 900px;
  border-radius: 0;
  background-size: cover;
  background-position: center center;
  outline: 0;
`;
const Title = css`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  & > div {
    text-align: center;
    height: 180px;
    position: relative;
    top: 20%;
    color: white;
  }
  & > div > div:nth-child(1) {
    font-size: 14pt;
    margin-bottom: 0.2em;
  }
  & > div > div:nth-child(2) {
    font-size: 26pt;
    font-weight: 700;
    margin-bottom: 1em;
  }
  /* & > div button {
    margin-top: 20px;
    cursor: pointer;
    border: 3px solid white;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    padding: 10px;
    font-size: 15pt;
    font-weight: 700;
    &:focus {
      outline: 0;
    } */
  /* } */
`;

const innerDiv = css`
  width: 100%;
  height: 100%;
  display: block;
`;
