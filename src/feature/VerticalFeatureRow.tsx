import className from 'classnames';

type IVerticalFeatureRowProps = {
  file_name: string;
  ipfs_cid: string;
  file_type: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.file_name}</h3>
        <div className="mt-6 text-xl leading-9">{props.file_type}</div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={`${props.ipfs_cid}.ipfs.dweb.link/${props.file_name}`} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
