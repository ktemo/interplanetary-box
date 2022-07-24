import className from 'classnames';

type IFileItemProps = {
  file_name: string;
  ipfs_cid: string;
  file_type: string;
};

const FileItem = (props: IFileItemProps) => {
  const fileItemClass = className(
  );

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="p-4 w-32">
            <img src={`https://${props.ipfs_cid}.ipfs.dweb.link/${props.file_name}`} alt="{props.file_name}"/>
        </td>
        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
            {props.file_name}
        </td>
        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
          <div class="flex items-center">
              <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> 
              Public
          </div>
        </td>
        <td class="py-4 px-6">
          <a href="#" title="Share" class="font-medium text-red-600 dark:text-red-500 hover:underline">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
          </a>
          <a href="#" title="Unlink" class="font-medium text-red-600 dark:text-red-500 hover:underline">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </a>
        </td>
    </tr>
  );
};

export { FileItem };
