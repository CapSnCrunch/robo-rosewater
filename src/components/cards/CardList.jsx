import { useContext, useEffect } from 'react'
import CardItem from './CardItem'
import MagicContext from '../../context/MagicContext'
import Spinner from '../layout/Spinner'

function CardList() {
    const { cards, getCards, filters, loading } = useContext(MagicContext)

    const filterCards = () => {
        let filteredCards = []
        console.log('cards', cards)
        cards.forEach((card) => {
            let boolean = true
            Object.keys(filters).forEach((filter) => {
                if (filters[filter] && !card.data['colors'].includes(filter) && !card.data['types'].includes(filter)){
                    boolean = false
                }
            })
            if (boolean === true){
                filteredCards.push(card)
            }
        })
        return filteredCards
    }

    useEffect(() => {
        getCards()
    }, [])

    console.log('filter cards', filterCards())
    console.log(filterCards() != [])

    if(!loading){
        return (
            <>
                {filterCards().length > 0 
                    ? ( 
                        <div className='grid grid-cols-1 gap-8 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2'>
                            {filterCards().map((card) => (
                                <CardItem key={card.id} card={card.data}/>
                            ))}
                        </div>
                    )
                    : (<div className='grid grid-rows-2'>
                            <p className='mb-2 text-xl font-light text-center'>No cards were found</p>
                        </div>)
                }
            </>
        )
    } else {
        return <Spinner />
    }
}

export default CardList
