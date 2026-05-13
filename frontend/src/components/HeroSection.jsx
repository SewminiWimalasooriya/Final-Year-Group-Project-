import heroImage from "../assets/heroimage.png";


const HeroSection = () => {
    return (
        <section>
            
                    <img src={heroImage} className="w-full h-auto rounded-lg shadow-md"/>
                
            <div>
                <h1>
                    Smart EV Charging Soluthion
                </h1>

                <p>
                    Find nearby charging stations and manage apartment EV charging easily 

                </p>
                
            </div>
        </section>
    )
}


export default HeroSection;