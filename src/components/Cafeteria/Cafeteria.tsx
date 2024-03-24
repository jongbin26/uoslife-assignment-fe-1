import { CafeteriaType } from "./Cafeteria.type";
import Text from "../Text/Text";
import styled from "styled-components";

type CafeteriaProps = {
  cafeteria: CafeteriaType;
};

const Cafeteria = ({ cafeteria }: CafeteriaProps) => {
  return (
    <Wrapper>
      <LocationWrapper>
        <Text
          text={cafeteria.location}
          fontSize={18}
          fontWeight={600}
          color={"#3B4046"}
        />
        <a href="https://www.uos.ac.kr/food/placeList.do?epTicket=LOG">
          자세히보기
        </a>
      </LocationWrapper>
      <InformationWrapper>
        <InformationUpperWrapper>
          <Text
            text={cafeteria.mainMenu}
            fontSize={18}
            fontWeight={600}
            color={"#3B4046"}
          />
          <Text
            text={cafeteria.openingHours}
            fontSize={15}
            fontWeight={500}
            color={"#808A98"}
          />
        </InformationUpperWrapper>
        <InformationMediumWrapper>
          <Text
            text={cafeteria.detailMenu}
            fontSize={15}
            fontWeight={500}
            color={"#808A98"}
          />
        </InformationMediumWrapper>
        <InformationLowwerWrapper>
          <Text
            text={cafeteria.nutritionalInfo}
            fontSize={11}
            fontWeight={500}
            color={"#97A1AE"}
          />
          <Text
            text={cafeteria.price}
            fontSize={18}
            fontWeight={600}
            color={"#3B4046"}
          />
        </InformationLowwerWrapper>
      </InformationWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #dee1e5;
  border-radius: 16px;
  margin: 16px;
`;
const LocationWrapper = styled.div`
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  a {
    font-size: 15px;
    line-height: 22.5px;
    color: #3a88f5;
    text-decoration: none;
  }
`;
const InformationWrapper = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border-top: 1px solid #dee1e5;
`;
const InformationUpperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
const InformationMediumWrapper = styled.div`
  display: flex;
`;
const InformationLowwerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export default Cafeteria;
