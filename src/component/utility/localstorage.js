const getStoredDonation = () =>{
    const storedDonation = localStorage.getItem('donation-id');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}


const saveDonationAmount = id =>{
    const storedDonation = getStoredDonation();
    const exists = storedDonation.find(jobId => jobId === id);
    if(!exists){
        storedDonation.push(id);
        localStorage.setItem('donation-id', JSON.stringify(storedDonation))
    }
}

export { getStoredDonation, saveDonationAmount}