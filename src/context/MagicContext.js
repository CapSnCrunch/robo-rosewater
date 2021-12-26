import { createContext, useReducer } from "react"
import { collection, getDocs, query, where, orderBy, limit, startAfter } from 'firebase/firestore'
import { db } from '../firebase.config'
import magicReducer from './MagicReducer'
import { data } from "autoprefixer"

const MagicContext = createContext()

export const MagicProvider = ({children}) => {
    const initialState = {
        loading: false,
        cards: [],
        filters: {
            white: false,
            blue: false,
            black: false,
            red: false,
            green: false,
            land: false,
            creature: false,
            artifact: false,
            enchantment: false,
            planeswalker: false,
            instant: false,
            sorcery: false,
        },
    }

    const [state, dispatch] = useReducer(magicReducer, initialState)

    // Get cards
    const getCards = async (filters) => {
        setLoading()
        console.log('Loading cards...')

        try {
            // Get reference
            const cardsRef = collection(db, 'cards')

            // Create a query
            const q = query(
                cardsRef,
                orderBy('name', 'asc')
            )

            // Execute query
            const querySnap = await getDocs(q)

            let cards = []
            querySnap.forEach((doc) => {
                return cards.push({
                    id: doc.id,
                    data: doc.data()
                })
            })

            dispatch({
                type: 'GET_CARDS',
                payload: cards
            })

        } catch(error) {
            console.log(error)
        }
    }

    // Set loading
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    // Set filters
    const setFilters = (newFilters) => dispatch({
        type: 'SET_FILTERS',
        payload: newFilters
    })

    return <MagicContext.Provider value={{
        filters: state.filters,
        cards: state.cards,
        getCards,
        setFilters,
        loading: state.loading,
    }}>
        {children}
    </MagicContext.Provider>
}

export default MagicContext