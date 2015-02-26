#!/bin/sh
## Usage is to run this from the current directory
## It walks through all the assets/image/cat folders
## Outputs a JSON file for use by the catalogFileService.js

destFile=../src/assets/json/catalog.json
path=../src/assets/images/catalog

# Had to go through convolutions to get a dir listing into an array
dirList=$(ls $path | tr "\n" ";")
IFS=';' read -a dirList <<< "${dirList}"

# Start JSON
echo "{\"data\":[" > $destFile
echo "{\"catalog\":\"header\", \"messages\":[" >> $destFile
echo "\"Generated from the script stem-store/tools/create-image-list-json.sh\"," >> $destFile
echo "\"If you wan to clean up the generated JSON, you can format it with a tool like http://jsonviewer.stack.hu/\"" >> $destFile
echo "]}" >> $destFile

numDir=${#dirList[@]}

#for i in $dirList
for ((i=0;i<$numDir;i++))
do
	echo "Processing directory ${dirList[$i]}"
	dirName=${dirList[$i]/\//}

	fileList=$(ls $path/${dirList[$i]}* | grep .sm.jpg | tr "\n" ";")
	IFS=';' read -a fileList <<< "${fileList}"
	numFiles=${#fileList[@]}
	loopLimit=$(expr $numFiles - 1)

	##echo "$numFiles Files in array $fileList"

	# Start Catalog Entry
	echo ",{\"catalog\":\"$dirName\", \"images\":[" >> $destFile
	for ((k=0;k<$numFiles;k++))
	do
		## echo "Processing file ${fileList[$k]}"
		filename=${fileList[$k]}
		filename=${filename/.sm.jpg/}
		filename=${filename/$path${dirList[$i]}/}
		echo "Processing file $filename"

		if [ $k -eq 0 ]
		then
		  echo "\"$filename\"" >> $destFile
		else
		  echo ",\"$filename\"" >> $destFile
		fi
	done
	# End Catalog Entry
	echo "]}" >> $destFile
done

# End JSON
echo "]}" >> $destFile

echo "Done "
exit 0
