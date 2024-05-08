import React from "react";
import PeopleItem from './PeopleItem';
import "./PeopleList.css"; // Import CSS for styling

// Import images for all people
import AlvinImage from '../Assets/Alvin.jpg';
import ArlImage from '../Assets/Arl.jpg';
import AshaImage from '../Assets/Asha.jpg';
import BonImage from '../Assets/Bon.jpg';
import CeleImage from '../Assets/Cele.jpg';
import DwayneImage from '../Assets/Dwayne.jpg';
import EmmettImage from '../Assets/Emmett.jpg';
import GeekImage from '../Assets/Geek.jpg';
import HarrietImage from '../Assets/Harriet.jpg';
import JayImage from '../Assets/Jay.jpg';
import JustaImage from '../Assets/Justa.jpg';
import KeishaImage from '../Assets/Keisha.jpg';
import LexyImage from '../Assets/Lexy.jpg';
import LilyImage from '../Assets/Lily.jpg';
import LolaImage from '../Assets/Lola.jpg';
import LuthorImage from '../Assets/Luthor.jpg';
import MikeImage from '../Assets/Mike.jpg';
import NayImage from '../Assets/Nay.jpg';
import NaziImage from '../Assets/Nazi.jpg';
import NickImage from '../Assets/Nick.jpg';
import NinaImage from '../Assets/Nina.jpg';
import OmanImage from '../Assets/Oman.jpg';
import RomanImage from '../Assets/Roman.jpg';
import RoxanImage from '../Assets/Roxan.jpg';
import TashaImage from '../Assets/Tasha.jpg';
import UrsulaImage from '../Assets/Ursula.jpg';
import WhiteImage from '../Assets/White.jpg';
import LizImage from '../Assets/Liz.jpg';
import TimImage from '../Assets/Tim.jpg';
import KyleImage from '../Assets/Kyle.jpg';

// Define DefaultImage with a default image source
const DefaultImage = ''; // Set it to null or an empty string if you don't have a specific default image

function PeopleList({ people }) {
    return (
        <div className="scroll-container">
            <div className="card-container">
                {people.map(person => {
                    let imageSrc;
                    switch (person.name) {
                        case 'Alvin':
                            imageSrc = AlvinImage;
                            break;
                        case 'Arl':
                            imageSrc = ArlImage;
                            break;
                        case 'Asha':
                            imageSrc = AshaImage;
                            break;
                        case 'Bon':
                            imageSrc = BonImage;
                            break;
                        case 'Cele':
                            imageSrc = CeleImage;
                            break;
                        case 'Dwayne':
                            imageSrc = DwayneImage;
                            break;
                        case 'Emmett':
                            imageSrc = EmmettImage;
                            break;
                        case 'Geek':
                            imageSrc = GeekImage;
                            break;
                        case 'Harriet':
                            imageSrc = HarrietImage;
                            break;
                        case 'Jay':
                            imageSrc = JayImage;
                            break;
                        case 'Justa':
                            imageSrc = JustaImage;
                            break;
                        case 'Keisha':
                            imageSrc = KeishaImage;
                            break;
                        case 'Lexy':
                            imageSrc = LexyImage;
                            break;
                        case 'Lily':
                            imageSrc = LilyImage;
                            break;
                        case 'Lola':
                            imageSrc = LolaImage;
                            break;
                        case 'Luthor':
                            imageSrc = LuthorImage;
                            break;
                        case 'Mike':
                            imageSrc = MikeImage;
                            break;
                        case 'Nay':
                            imageSrc = NayImage;
                            break;
                        case 'Nazi':
                            imageSrc = NaziImage;
                            break;
                        case 'Nick':
                            imageSrc = NickImage;
                            break;
                        case 'Nina':
                            imageSrc = NinaImage;
                            break;
                        case 'Oman':
                            imageSrc = OmanImage;
                            break;
                        case 'Roman':
                            imageSrc = RomanImage;
                            break;
                        case 'Roxan':
                            imageSrc = RoxanImage;
                            break;
                        case 'Tasha':
                            imageSrc = TashaImage;
                            break;
                        case 'Ursula':
                            imageSrc = UrsulaImage;
                            break;
                        case 'White':
                            imageSrc = WhiteImage;
                            break;
                        case 'Liz':
                            imageSrc = LizImage;
                            break;
                        case 'Tim':
                            imageSrc = TimImage;
                            break;
                        case 'Kyle':
                            imageSrc = KyleImage;
                            break;
                        default:
                            imageSrc = DefaultImage;
                            break;
                    }
                    return <PeopleItem {...person} imageSrc={imageSrc} key={person.name} />;
                })}
            </div>
        </div>
    );
}

export default PeopleList;