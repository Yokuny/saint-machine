import ContentField from './pages/_ContentField'
import _WorksSlide from './pages/_WorksSlide'
export default function FirstPage() {
  return (
    <div className="flex justify-content items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-3">
              <_WorksSlide title="Posts" />
          </div>
          <div className="lg:mt-14 mt-8 col-span-3 md:col-span-2">
              <ContentField />
          </div>
      </div>
    </div>
  );
};
