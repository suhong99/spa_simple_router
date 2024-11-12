import NaviButton from '../shared/components/NaviButton';
import { URL_CONST } from '../shared/const/url';

const Root = () => {
  return (
    <div className="wrapper">
      root
      <NaviButton text="about" url={URL_CONST.about} />
    </div>
  );
};

export default Root;
