import styled from "styled-components";
import {theme} from "../../../styles/theme.tsx";

const SkillItemStyled = styled.div`

    width: 330px;
    padding: 62px 20px 40px;
    flex-grow:1 ;
    h3{
        margin: 67px 0 15px;
        letter-spacing: 1px;
    }
  @media  ${theme.media.mobile} {
      padding: 62px 0px 55px;
      h3 {
          letter-spacing: 3px;
          margin: 67px 0 20px;
      }
  }
`
 const IconWrapper= styled.div`
    position: relative;

    &:before {
        content: '';
        display: inline-block;
        position: absolute;
        width: 80px;
        height: 80px;
        background-color: rgba(255, 255, 255, 0.1);
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
        
    }
`
 const SkillStyled = styled.section`

`
export const style ={
    SkillStyled,IconWrapper,SkillItemStyled
}