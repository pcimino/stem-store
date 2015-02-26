#!/bin/sh
## Usage is to run this from the current directory
## It walks through all the assets/image/cat folders
## Outputs a JSON file for use by the catalogFileService.js
##cd ../src/assets/images/catalog
destFile=catalog.json
dirList=$(ls -d1 */)

# Start JSON
echo "[" > $destFile

for i in $dirList
do
	echo "Processing directory $i"
	dirName=${i/\//}
		
	fileList=$(ls $i* | grep .sm.jpg | tr "\n" ";")
	IFS=';' read -a fileList <<< "${fileList}"
	numFiles=${#fileList[@]}
	loopLimit=$(expr $numFiles - 1)

	##echo "$numFiles Files in array $fileList"

	# Start Catalog Entry
	echo "{'catalog':'$dirName', 'images':[" >> $destFile
	for ((k=0;k<$numFiles;k++))
	do
		## echo "Processing file ${fileList[$k]}"
		filename=${fileList[$k]}
		filename=${filename/.sm.jpg/}
		filename=${filename/$i/}
		echo "Processing file $filename"
		output="'$filename'"
		if [ $k -lt $loopLimit ]
		then
			output="$output,"
		fi
		echo "$output" >> $destFile

	done
	# End Catalog Entry
	echo "]}" >> $destFile
done

# End JSON
echo "]" >> $destFile

echo "Done "
exit 0
