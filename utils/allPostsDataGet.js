import TiagoRangelRibeiro from '../content/TiagoRangelRibeiro'
import FelipeRangelRibeiro from '../content/FelipeRangelRibeiro'
import MaryangelaCesconettoRainha from '../content/MaryangelaCesconettoRainha'
import WemillyVarjaoBorges from '../content/WemillyVarjaoBorges'
import ViniciusGeraldoCaliman from '../content/ViniciusGeraldoCaliman'
import AlexiaCsajkovicsFilgueiras from '../content/AlexiaCsajkovicsFilgueiras'
import RosilaneVasconcelosBraga from '../content/RosilaneVasconcelosBraga'
import AugustoCesarAndradeFarias from '../content/AugustoCesarAndradeFarias'
import AmandaDaSilvaSouza from '../content/AmandaDaSilvaSouza'
import LaraPravatoFigueiredo from '../content/LaraPravatoFigueiredo'
import AliceUliana from '../content/AliceUliana'
import GiovanaBonassina from '../content/GiovanaBonassina'
import DiegoDiasCosta from '../content/DiegoDiasCosta'
import GuilhermeVargas from '../content/GuilhermeVargas'
import CarolinaZorzal from '../content/CarolinaZorzal'
import EvilynElviraManhoni from '../content/EvilynElviraManhoni'
import PauloHenriqueAEller from '../content/PauloHenriqueAEller'
GuilhermeVargas
export default function allPostsDataGet(){
    const firstPackOfData = [];
    firstPackOfData.unshift(TiagoRangelRibeiro);
    firstPackOfData.unshift(FelipeRangelRibeiro);
    firstPackOfData.unshift(MaryangelaCesconettoRainha);
    firstPackOfData.unshift(WemillyVarjaoBorges);
    firstPackOfData.unshift(ViniciusGeraldoCaliman);
    firstPackOfData.unshift(AlexiaCsajkovicsFilgueiras);
    const secondPackOfData = [];
    secondPackOfData.unshift(RosilaneVasconcelosBraga);
    secondPackOfData.unshift(AugustoCesarAndradeFarias);
    secondPackOfData.unshift(AmandaDaSilvaSouza);
    secondPackOfData.unshift(LaraPravatoFigueiredo);
    secondPackOfData.unshift(AliceUliana);
    secondPackOfData.unshift(GiovanaBonassina);
    const thirdPackOfData = [];
    thirdPackOfData.unshift(DiegoDiasCosta);
    thirdPackOfData.unshift(GuilhermeVargas);
    thirdPackOfData.unshift(CarolinaZorzal);
    thirdPackOfData.unshift(EvilynElviraManhoni);
    thirdPackOfData.unshift(PauloHenriqueAEller);

    const allData = [];
    allData.unshift(firstPackOfData);
    allData.unshift(secondPackOfData);
    allData.unshift(thirdPackOfData);
    return allData;
}