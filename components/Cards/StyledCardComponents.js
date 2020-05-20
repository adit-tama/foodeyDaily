import styled from 'styled-components';

export const HeadingMenu = styled.div`width:50%`
export const ContentMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 50%;
`;
export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 262px;
  background-color: #f2f8f9;
  border-radius: 6px;
  padding: 32px 24px;
  margin: 12px;
  z-index: 0;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #F83D44;
    height: 20px;
    width: 20px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.5s ease-out;
  }

  &:hover::before {
    transform: scale(30);
  }

  &:hover {
	  p {
	    transition: all 0.4s ease-out;
	    color: white;
	  }
	  h3 {
	    transition: all 0.4s ease-out;
	    color: white;
	  }
	}`
export const RecipeCardContainer = styled.div`
  display: block;
  position: relative;
  max-width: 25rem;
  border-radius: 6px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  width:25rem;
  height:8rem;
  background: white;
  box-sizing: border-box;
  transition: all 1s;
  visibility: visible;
  overflow: hidden;
  cursor:pointer;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #FFEB00;
    height: 20px;
    width: 20px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }

  &:hover:before {
    transform: scale(50);
  }

  $:hover {
    background:#F83D44;
    color:white;
    transition: all 1s;
    p {
      transition: all 0.3s ease-out;
      color: rgba(255, 255, 255, 0.8);
    }
    h3 {
      transition: all 0.3s ease-out;
      color: black;
    }
  }`;

export const CardImage = styled.img`
  width: 30%;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
`
