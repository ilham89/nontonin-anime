import Header from '../components/Header';
import { IBaseLayout } from '../interfaces/base';

const Detail = ({ children }: IBaseLayout) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Detail;
