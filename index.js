const BUY_CAKE = 'BUY_CAKE'

function buycake(){
  return{
    type: BUY_CAKE,
    info: 'First Redux Action'
  }
}

const initialState = {
  numOfCakes = 10
}

const reducer = (state=initialState, action){
  switch(action.type){
    case BUY_CAKE: return { ...state, numOfCakes: state.numOfCakes - 1 }
    default: return state
  }
}
