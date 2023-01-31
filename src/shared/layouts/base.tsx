import Header from '../components/Header';
import HeaderButton from '../components/HeaderButton';
import Hero from '../components/Hero';
import { IBaseLayout } from '../interfaces/base';

const Base = ({ children }: IBaseLayout) => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="app container px-5 md:px-0 mx-auto">
        <div className="mb-6">
          <HeaderButton />
        </div>
        {children}
      </div>
    </div>
  );
};
export default Base;
