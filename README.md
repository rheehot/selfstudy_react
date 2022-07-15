# 리액트/리덕스 공부하기

### 7월 15일

- contextAPI 👉 데이터의 규모가 작고, 상태 변화가 적은 경우 장점이 있다.
  keyword : createContext, Provider, Consumer, useContext
- Redux 👉 같은 기능을 하는 코드를 짜도 contextAPI 보다 코드량이 훨씬 많다.
  keyword : Ducks Structure
  Ducks Structure consists of initialData, actionType, actionFunction and Reducer
- Redux Tool Kit 👉 initialData, actionType, actionFunction and Reducer를 한 번에 묶어서 사용 가능(slice)
  keyword : createSlice, configureStore
  createSlice creates everything you needed for the Ducks Structure
