import styled from 'styled-components';

export const MenuScroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  height: 68%;
  width: 100%;`
export const TaglineContainer = styled.div`
  width: 75%;
  height: 5%;
  display: flex;
  justify-content: flex-start;
  align-items: center;`
export const LogoContainer = styled.div`
  padding-top: 1rem;
  width: 75%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;`
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;`

export const Keyword = styled.p`
	display: flex
	padding-right: 2rem;
	margin-right: 5rem;
	font-weight: 400;
	font-size: 14px;

	&:before {
		content: 'keyword: ';
	  font-weight: 100;
	  font-size: 14px;
	}`;

export const Recipe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;`
export const KeywordContainer = styled(Recipe)`
	display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
	height: 22%;`
export const RecipeContainer = styled.div`
	padding: 0px;
	display: block;
	height: 62%;
	width: 100%;
	overflow: scroll;`
export const RecipeList = styled.div`
	display: grid;
  grid-template-columns: auto auto;
  padding: 0.25rem;
  overflow: scroll;`
export const RecipeItem = styled.div`
	text-align: center;`