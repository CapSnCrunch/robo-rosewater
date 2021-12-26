function CardItem({card: {name, imageUrl}}) {
    return (
        <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer duration-150">
            <div className='card shadow-md compact overflow-hidden'>
                <img src={imageUrl} alt={name} onClick={() => (console.log({name}))}/>
            </div>
        </div>
    )
}

export default CardItem