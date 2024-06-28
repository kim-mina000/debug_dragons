import styled from "styled-components";
import SearchMain from "./1.searchPage/SearchMain";
import MenuBar from "./0.menuBar/MenuBar";
import Headers from "./0.menuBar/Header";
import { useSelector } from "react-redux";
import { store } from "../store/store";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const FixedMenubar = styled(MenuBar)`
  position: fixed;
  bottom: 0;
`;

function MainContainer() {
  const userInfo = useSelector(state => state.member.userInfo);
  console.log(userInfo);


  return (
    <>    
      <Headers userName={userInfo.userName} />
      <Wrap>
      
        <SearchMain />
      
      <MenuBar />
      </Wrap>
    </>

  );
};

export default MainContainer;