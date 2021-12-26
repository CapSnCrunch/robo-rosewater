import { useContext } from "react"
import MagicContext from "../../context/MagicContext"
import white from '../assets/svg/white.png'
import blue from '../assets/svg/blue.png'
import black from '../assets/svg/black.png'
import red from '../assets/svg/red.png'
import green from '../assets/svg/green.png'

function CardSearch() {
    const { filters, setFilters } = useContext(MagicContext)

    const onMutate = (e) => {
        setFilters({
            ...filters,
            [e.target.id]: 'false' === `${filters[e.target.id]}`
        })
    }

    return (
        <div className='grid grid-rows-2 gap-2'>
            <div className="flex justify-center items-center space-x-1">         
                <button className={`btn btn-circle btn-ghost ${ filters.white ? "bg-gray-500" : "hover:bg-gray-200"}`} id='white' value={filters.white} onClick={onMutate}>
                    <img src={white} id='white' value={filters.white} alt='white' width='34px' height='34px'/>
                </button>
                <button className={`btn btn-circle btn-ghost ${ filters.blue ? "bg-gray-500" : "hover:bg-gray-200"}`} id='blue' value={filters.blue} onClick={onMutate}>
                    <img src={blue} id='blue' value={filters.blue} alt='blue' width='34px' height='34px'/>
                </button>
                <button className={`btn btn-circle btn-ghost ${ filters.black ? "bg-gray-500" : "hover:bg-gray-200"}`} id='black' value={filters.black} onClick={onMutate}>
                    <img src={black} id='black' value={filters.black} alt='black' width='34px' height='34px'/>
                </button>
                <button className={`btn btn-circle btn-ghost ${ filters.red ? "bg-gray-500" : "hover:bg-gray-200"}`} id='red' value={filters.red} onClick={onMutate}>
                    <img src={red} id='red' value={filters.red} alt='red' width='34px' height='34px'/>
                </button>
                <button className={`btn btn-circle btn-ghost ${ filters.green ? "bg-gray-500" : "hover:bg-gray-200"}`} id='green' value={filters.green} onClick={onMutate}>
                    <img src={green} id='green' value={filters.green} alt='green' width='34px' height='34px'/>
                </button>
            </div>
            <div className='grid grid-rows-2 gap-4'>
                <div className="flex justify-center items-center space-x-1 mb-4">
                    <button className={`btn btn-sm btn-ghost ${ filters.land ? "bg-gray-500" : "hover:bg-gray-200"}`} id='land' onClick={onMutate}>
                        Land
                    </button>
                    <button className={`btn btn-sm btn-ghost ${ filters.creature ? "bg-gray-500" : "hover:bg-gray-200"}`} id='creature' onClick={onMutate}>
                        Creature
                    </button>
                    <button className={`btn btn-sm btn-ghost ${ filters.artifact ? "bg-gray-500" : "hover:bg-gray-200"}`} id='artifact' onClick={onMutate}>
                        Artifact
                    </button>
                    <button className={`btn btn-sm btn-ghost ${ filters.enchantment ? "bg-gray-500" : "hover:bg-gray-200"}`} id='enchantment' onClick={onMutate}>
                        Enchantment
                    </button>
                    <button className={`btn btn-sm btn-ghost ${ filters.planeswalker ? "bg-gray-500" : "hover:bg-gray-200"}`} id='planeswalker' onClick={onMutate}>
                        Planeswalker
                    </button>
                    <button className={`btn btn-sm btn-ghost ${ filters.instant ? "bg-gray-500" : "hover:bg-gray-200"}`} id='instant' onClick={onMutate}>
                        Instant
                    </button>
                    <button className={`btn btn-sm btn-ghost ${ filters.sorcery ? "bg-gray-500" : "hover:bg-gray-200"}`} id='sorcery' onClick={onMutate}>
                        Sorcery
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardSearch
