import gitLogo from "../assets/github.png";
import instagramLogo from "../assets/instagram.png";

function Footer () {
    return (
    <footer className="flex justify-around text-center bg-red-600 w-full text-white py-2 px-8 md:px-12 lg:px-20"> 
        <a href="https://instagram.com/"><img src={gitLogo} alt="Github logo white" width={24} /></a>

        <span>All rights reserveds</span>

        <a href="https://https://github.com/mohajiro"><img src={instagramLogo} alt="Instagram logo white" width={24} /></a>
    </footer>
    )
}

export default Footer;