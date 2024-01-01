import React, { useState, useEffect, forwardRef } from 'react';
import './Main2.scss';
import iPhoneImage from '../../assets/images/iphone.png';
import apple from '../../assets/images/apple.png';
import google from '../../assets/images/google.png';
import qr from '../../assets/images/qr2.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Main = forwardRef((props, ref) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [instagramId, setInstagramId] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [submitRequest, setSubmitRequest] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (submitRequest) {
      fetch('http://43.201.230.81/snslink/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          snsLink: `https://www.instagram.com/${instagramId}`,
        }),
      })
        .then(response => response.json())
        .then(data => {
          alert(`Response: ${data.message}`);
          setSubmitRequest(false);
        })
        .catch(() => {
          alert('서버로부터 응답을 받는데 실패했습니다.');
          setSubmitRequest(false);
        });
    }
  }, [submitRequest, instagramId]);

  const handleGoogleBtnClick = () => {
    alert('앱 준비중입니다');
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!instagramId.trim() || isInvalid) {
      alert('올바른 인스타그램 아이디를 입력해주세요.');
    } else {
      setSubmitRequest(true);
    }
  };

  const handleInputChange = e => {
    const value = e.target.value.replace(/\s/g, ''); // 공백 제거
    setIsInvalid(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(value)); // 한글 여부 검증
    setInstagramId(value);
  };

  const isMobileOrTablet = width <= 1024;

  return (
    <>
      <div className="body">
        <div className="main">
          {isMobileOrTablet && (
            <div className="mainCopy">
              <span>함께 운동할 친구,</span>
              <br />
              <span>모티브에서 찾아요!</span>
            </div>
          )}
          <div className="mainRight">
            <div className="iphone">
              <img src={iPhoneImage} alt="아이폰" />
            </div>
          </div>
          <div className="mainLeft">
            {!isMobileOrTablet && (
              <div className="mainCopy">
                <span>함께 운동할 친구,</span>
                <br />
                <span>모티브에서 찾아요!</span>
              </div>
            )}
            <div className="cta">
              <div className="storeBtn">
                <img
                  src={google}
                  alt="구글"
                  className="googleBtn"
                  onClick={handleGoogleBtnClick}
                />
                <img
                  src={apple}
                  alt="애플"
                  className="googleBtn"
                  onClick={handleGoogleBtnClick}
                />
              </div>
              <img src={qr} alt="큐알" className="qr" />
            </div>
            {/* <div className="instaId">
            <form onSubmit={handleFormSubmit} className="formContainer">
              <TextField
                label="인스타그램주소"
                id="instagramId"
                value={instagramId}
                onChange={handleInputChange}
                error={isInvalid}
                helperText={
                  isInvalid ? '올바른 인스타그램 아이디를 입력해주세요.' : ''
                }
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
              >
                제출
              </Button>
            </form>
          </div> */}
          </div>
        </div>
      </div>
      <div className="instaCopy">
        <span>모티브를 가장 먼저 만나보세요</span>
      </div>
      <div className="instaSubCopy">
        <span>인스타그램 아이디를 알려주시면,</span>
        <br />
        <span>모티브를 가장 먼저 만날 수 있어요!</span>
      </div>
      <div className="instaId">
        <form onSubmit={handleFormSubmit} className="formContainer">
          <TextField
            label="인스타그램주소"
            id="instagramId"
            value={instagramId}
            onChange={handleInputChange}
            error={isInvalid}
            helperText={
              isInvalid ? '올바른 인스타그램 아이디를 입력해주세요.' : ''
            }
            inputRef={ref} // Ref 추가
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
          ></Button>
        </form>
      </div>
      <div className="appBtn" onClick={handleGoogleBtnClick}>
        모티브 시작하기
      </div>
    </>
  );
});

export default Main;
