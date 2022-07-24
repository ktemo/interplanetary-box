import className from 'classnames';

type IVerticalFeatureRowProps = {
  file_name: string;
  img: string;
};

const LandingPageStub = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center'
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.file_name}</h3>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={`${props.img}`} />
      </div>
    </div>
  );
};

export { LandingPageStub };
