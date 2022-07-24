import { useEffect } from "react";
import { useAddress } from '@thirdweb-dev/react';

import { Section } from "../layout/Section";
import { FileItem } from '../feature/FileItem';
import { useSelectors } from '../store/selectors';
import { onFilePicked, onUploadFile } from '../utils/fileManager';

const FileManagerDashboard = () => {
  const { userFiles, loadUserFiles } = useSelectors();

  useEffect(() => {
    loadUserFiles();
  }, []);

  return (    
    <Section>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">New file</label>
    <input onChange={onFilePicked}  class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help"></p>

    <div class="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Private</label>
    </div>

    <button onClick={onUploadFile} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Upload File
      <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>

    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              My Content
              <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of your content to share or remove it from your profile.</p>
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        <span class="sr-only">Image</span>
                    </th>
                    <th scope="col" class="py-3 px-6">
                        File
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Visible
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {userFiles.map((e, i) => {
                  return <FileItem
                    file_name={e.file_name}
                    file_type={e.file_type}
                    ipfs_cid={e.ipfs_cid}
                  />

                })}
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="p-4 w-32">
                        <img src="/docs/images/products/imac.png" alt="Apple Imac" />
                    </td>
                    <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        Imac 27"
                    </td>
                    <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      <div class="flex items-center">
                          <div class="h-2.5 w-2.5 rounded-full bg-red-400 mr-2"></div> Private
                      </div>
                    </td>
                    <td class="py-4 px-6">
                        <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </Section>
  );
};

export { FileManagerDashboard };