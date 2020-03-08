import styled from "styled-components";

const Search = styled.div`
  background-color: #f5f5f5;
  color: black;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  outline: none;
`;

const SearchTitle = styled.div`
font-size: 32px;
color: black;
`;

const AddParams = styled.div`
  border: 0px solid black;
  border-radius: 10px;
  box-shadow: 2px 2px #f2f0ee;
  background: white;
  padding: 30px;
  margin: 25px;
`;

const Queries = styled.div`
  border: 0px solid black;
  border-radius: 10px;
  box-shadow: 2px 2px #f2f0ee;
  background: white;
  padding: 30px;
  margin: 25px;
`;

const CurrentFoods = styled.div`
  width: 800px;
  border: 0px solid black;
  border-radius: 10px;
  box-shadow: 2px 2px #f2f0ee;
  background: white;
  padding: 30px;
  margin: 25px;
`;

const SearchParams = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 350px;
  border: 0px solid black;
  border-radius: 10px;
  box-shadow: 2px 2px #f2f0ee;
  background: white;
  padding: 30px;
  margin: 25px;
`;

const SearchParamsImage = styled.button`
  height: 15px;
  width: 15px;
  border: none;
  background: url(./images/search/nutrition.png) no-repeat;
  background-size: 15px 15px;
  background-position: center;
`;

const SecondRowContainer = styled.span`
  display: flex;
  flex-direction: row;
`;

const AddParamButton = styled.input`
  
`;

const ParamForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ParamFormInputs = styled.span`
  display: flex;
  flex-direction: row;
`;

const CurrentFoodsButtons = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;



export { Search, SearchTitle, AddParams, Queries, CurrentFoods, SearchParams, SearchParamsImage, SecondRowContainer, AddParamButton, ParamForm, ParamFormInputs, CurrentFoodsButtons};