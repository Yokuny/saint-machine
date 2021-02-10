import ContentFieldTitle from './_ContentFieldTitle';
import PhotoSlide from './_PhotoSlide';
export default function WorksSlide(){
    return(
        <div className="flex flex-col justify-center bg-gray-800 rounded">
            <ContentFieldTitle title="Works" />
            <div className="mb-8 mt-2">
                <PhotoSlide />
            </div>
        </div>
    );
}