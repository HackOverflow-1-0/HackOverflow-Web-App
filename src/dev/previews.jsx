import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Background from "../components/Background";
import {Schedule} from "../components/Schedule/Schedule";
import AppFeature from "../components/AppFeature/AppFeature";
import ThemesCard from "../components/ThemesCard/ThemesCard";
import CountDownSquare from "../components/CountDown/CountDownCard";
import Certificates from "../components/Certificates/Certificates";
import AppTeam from "../components/AppTeam/AppTeam";
import BannerText from "../components/BannerText/BannerText";
import CollegeClub from "../components/CollegeClub/CollegeClub";
import DevFolioButton from "../components/DevFolio/DevFolioButton";
import Button from "../components/FaceGallery/Button";
import {Image} from "../components/FaceGallery/Image";
import {Banner} from "../components/Banner";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Background">
                <Background/>
            </ComponentPreview>
            <ComponentPreview path="/Schedule">
                <Schedule/>
            </ComponentPreview>
            <ComponentPreview path="/AppFeature">
                <AppFeature/>
            </ComponentPreview>
            <ComponentPreview path="/ThemesCard">
                <ThemesCard/>
            </ComponentPreview>
            <ComponentPreview path="/CountDownSquare">
                <CountDownSquare/>
            </ComponentPreview>
            <ComponentPreview path="/Certificates">
                <Certificates/>
            </ComponentPreview>
            <ComponentPreview path="/AppTeam">
                <AppTeam/>
            </ComponentPreview>
            <ComponentPreview path="/BannerText">
                <BannerText/>
            </ComponentPreview>
            <ComponentPreview path="/CollegeClub">
                <CollegeClub/>
            </ComponentPreview>
            <ComponentPreview path="/DevFolioButton">
                <DevFolioButton/>
            </ComponentPreview>
            <ComponentPreview path="/Button">
                <Button/>
            </ComponentPreview>
            <ComponentPreview path="/Image">
                <Image/>
            </ComponentPreview>
            <ComponentPreview path="/Banner">
                <Banner/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews