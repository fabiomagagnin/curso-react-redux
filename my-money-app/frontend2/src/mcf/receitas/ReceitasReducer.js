const INITIAL_STATE = {receitas: []}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'RECEITAS_FETCHED':
            return { ...state, receitas: action.payload.data.movimentacoes}
        default:
            return state
    }
}