import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { saveDonationAmount } from "../utility/localStorage";


const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const donation = donations.find(donation => donation.id === idInt);
    console.log(donation);




    const handleApplyJob = () =>{
        saveDonationAmount(idInt);
        toast.success('Your donation is successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
       
    }

    return (
        <div className="container mt-20">
            <div className=" w-full bg-base-100 shadow-xl">
                <div className="relative">
                        <figure><img className="w-full" src={donation.img} alt={donation.title} /></figure>
                    <div className="absolute bottom-0 left-0 w-full h-20 md:h-24 bg-[#0B0B0B80]">
                        <div className="absolute bottom-0 top-5 md:top-6 left-6">
                        <button type="btn" className="py-2 px-2 md:px-3 md:py-3 lg:px-3 lg:py-3  rounded-lg  text-xl font-semibold border-none text-white" style={{backgroundColor: donation.titleColor}} onClick={handleApplyJob}>Donation ${donation.price}</button>
                        </div>
                        
                    </div>
                </div>

                <div className="card-body">
                    <h2 className="font-bold text-4xl">{donation.title}</h2>
                    <p>{donation.description}</p>
                </div>
            </div>
            <ToastContainer 
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"/>
        </div>
    );
};

export default DonationDetails;