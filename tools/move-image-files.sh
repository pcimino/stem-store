
## Usage is to run this form the tools directory
# It looks for *.jpg files that are not *.sm.jpg, *.md.jpg or *.lg.jpg
# then renames the file to *.sm.jpg and copies it to .md.jpg and .lg.jpg
# The files should be resized for uniformity
# .lg.jpg => 1000px wide
# .md.jpg => 500px wide
# .sm.jpg +> 320px wide
#
path=../src/assets/images/catalog

# Had to go through convolutions to get a dir listing into an array
dirList=$(ls $path | tr "\n" ";")
IFS=';' read -a dirList <<< "${dirList}"
cd $path/${dirList[0]}

numDir=${#dirList[@]}
for ((i=0;i<$numDir;i++))
do
  cd ..
  cd ${dirList[$i]}
	fileList=$(ls * | grep .jpg | grep -v .sm.jpg | grep -v .md.jpg | grep -v .lg.jpg | tr "\n" ";")
	IFS=';' read -a fileList <<< "${fileList}"
	numFiles=${#fileList[@]}

	for ((k=0;k<$numFiles;k++))
	do
		echo "Processing file ${fileList[$k]}"
    filename=${fileList[$k]/.jpg/.sm.jpg}
    mv ${fileList[$k]} $filename
    filename1=${filename/.sm.jpg/.md.jpg}
    filename2=${filename/.sm.jpg/.lg.jpg}
    cp $filename $filename1
    cp $filename $filename2
	done
done

exit 0
