import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../utility/localStorage";
import { Link } from 'react-router-dom';


const Donation = () => {
    const donations = useLoaderData();
    const [givenDonation, setGivenDonations] = useState([]);
    const [displayDonations, setDisplayDonations] = useState([]);


    useEffect(() => {
        const storeDonationID = getStoredDonation();
        if (donations.length > 0) {



            const GivenDonations = [];
            for (const id of storeDonationID) {
                const donation = donations.find(donation => donation.id === id);
                if (donation) {
                    GivenDonations.push(donation)
                }
            }
            setGivenDonations(GivenDonations);
            setDisplayDonations(GivenDonations);
        }

    }, [donations])

    console.log(givenDonation);

    return (
        <div className="container mx-auto mt-5">
            <div className="card-container grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                {givenDonation.map((card) => (
                    
                    <div key={card.id} className="card card-side bg-base-100 shadow-xl">
                        <figure>
                            <img className="w-full h-full" src={card.img} alt={card.title} />
                        </figure>
                        <div className="card-body" style={{ backgroundColor: card.cardBackground}}>
                            <h2 className="category w-20 text-center font-medium text-sm" style={{ backgroundColor: card.catBackground, color: card.catColor }}>
                                {card.category}
                            </h2>
                            <h2 className="card-title text-2xl font-semibold">
                                {card.title}
                            </h2>
                            <h2 className="card-title text-2xl font-semibold" style={{ color: card.titleColor}}>
                                ${card.price}
                            </h2>
                            <div>
                           <Link to={`/details/${card.id}`}><button className="p-2 text-white" style={{ backgroundColor: card.titleColor}}>View Details</button> </Link>   
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Donation;