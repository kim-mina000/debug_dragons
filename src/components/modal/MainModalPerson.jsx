import React, { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #ccc;
  margin: 20px 0;
`;

const CountBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CountTitle = styled.div`
  font-weight: bold;
`;

const SmallText = styled.small`
  font-size: 12px;
  color: #999;
`;

const NumberCount = styled.div`
  display: flex;
  align-items: center;
`;

const CountButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountInput = styled.input`
  width: 40px;
  text-align: center;
  border: none;
  background: none;
  pointer-events: none;
`;

const BottomButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ResetButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  font-size: 14px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: black;
  color: white;
  cursor: pointer;

  &:hover {
    background: #00ee9f;
  }
`;

const MainModalPerson = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [petCount, setPetCount] = useState(0);

  const closeModal = () => setIsModalOpen(false);

  const handleCountChange = (type, age) => {
    if (age === 'adult') {
      if (type === 'minus' && adultCount > 0) setAdultCount(adultCount - 1);
      if (type === 'plus') setAdultCount(adultCount + 1);
    } else if (age === 'child') {
      if (type === 'minus' && childCount > 0) setChildCount(childCount - 1);
      if (type === 'plus') setChildCount(childCount + 1);
    } else if (age === 'infant') {
      if (type === 'minus' && infantCount > 0) setInfantCount(infantCount - 1);
      if (type === 'plus') setInfantCount(infantCount + 1);
    } else if (age === 'pet') {
      if (type === 'minus' && petCount > 0) setPetCount(petCount - 1);
      if (type === 'plus') setPetCount(petCount + 1);
    }
  };

  const handleReset = () => {
    setAdultCount(0);
    setChildCount(0);
    setInfantCount(0);
    setPetCount(0);
  };

  const handleSearch = () => {
    alert(`선택된 인원: 성인 ${adultCount}, 아동 ${childCount}, 영아 ${infantCount}, 반려동물 ${petCount}`);
    closeModal();
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>인원 수 모달 열기</button>
      {isModalOpen && (
        <Overlay onClick={closeModal}>
          <Content onClick={(e) => e.stopPropagation()}>
            <Title>누구와 떠날까요?</Title>
            <Line />
            <CountBox>
              <CountTitle>성인</CountTitle>
              <NumberCount>
                <CountButton onClick={() => handleCountChange('minus', 'adult')}>-</CountButton>
                <CountInput type="number" value={adultCount} readOnly />명
                <CountButton onClick={() => handleCountChange('plus', 'adult')}>+</CountButton>
              </NumberCount>
            </CountBox>
            <CountBox>
              <CountTitle>아동<SmallText> 24개월 ~ 12세</SmallText></CountTitle>
              <NumberCount>
                <CountButton onClick={() => handleCountChange('minus', 'child')}>-</CountButton>
                <CountInput type="number" value={childCount} readOnly />명
                <CountButton onClick={() => handleCountChange('plus', 'child')}>+</CountButton>
              </NumberCount>
            </CountBox>
            <CountBox>
              <CountTitle>영아<SmallText> 24개월 미만</SmallText></CountTitle>
              <NumberCount>
                <CountButton onClick={() => handleCountChange('minus', 'infant')}>-</CountButton>
                <CountInput type="number" value={infantCount} readOnly />명
                <CountButton onClick={() => handleCountChange('plus', 'infant')}>+</CountButton>
              </NumberCount>
            </CountBox>
            <CountBox>
              <CountTitle>반려동물<SmallText> (선택)</SmallText></CountTitle>
              <NumberCount>
                <CountButton onClick={() => handleCountChange('minus', 'pet')}>-</CountButton>
                <CountInput type="number" value={petCount} readOnly />마리
                <CountButton onClick={() => handleCountChange('plus', 'pet')}>+</CountButton>
              </NumberCount>
            </CountBox>
            <Line />
            <BottomButtonsContainer>
              <ResetButton onClick={handleReset}>
                🗑️ 초기화하기
              </ResetButton>
              <SearchButton onClick={handleSearch}>SEARCH</SearchButton>
            </BottomButtonsContainer>
          </Content>
        </Overlay>
      )}
    </>
  );
};

export default MainModalPerson;
