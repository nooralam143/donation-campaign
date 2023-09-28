import SearchBar from "../Searchbar/SearchBar";

const Hero = () => {
    return (
        <div>
            <section>
                <div className="hero  h-96 " style={{ backgroundImage: 'url(/background_img.png)'}}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold ">I Grow By Helping People In Need</h1>
                            <SearchBar></SearchBar>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;