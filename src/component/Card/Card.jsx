import { useEffect, useState } from "react";
import './card.css'
import { Link } from 'react-router-dom';

const Card = () => {
    const [donations, setDonations] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDonations(data));
    }, [])

    return (
         <div className="container mx-auto">
            <div className="card-container grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {donations.map((card) => (
                    <Link to={`/donation/${card.id}`}>
                    <div key={card.id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={card.img} alt={card.title} />
                        </figure>
                        <div className="card-body" style={{ backgroundColor: card.cardBackground}}>
                            <h2 className="category w-20 text-center font-medium text-sm" style={{ backgroundColor: card.catBackground, color: card.catColor }}>
                                {card.category}
                            </h2>
                            <h2 className="card-title text-xl font-semibold" style={{ color: card.titleColor}}>
                                {card.title}
                            </h2>
                        </div>
                    </div>
                    </Link>
                    
                ))}
            </div>
        </div>
    );
};

export default Card;