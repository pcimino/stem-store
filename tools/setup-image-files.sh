
## Usage is to copy this script to the image directory and run it
# It first renames any *.jpg files to *.sm.jpg
# then duplicates the files so there are three for web scalability
# *.lg.jpg
# *.md.jpg
# *.sm.jpg
# The files should be resized for uniformity 
# .lg.jpg => 1000px wide
# .md.jpg => 500px wide
# .sm.jpg +> 320px wide
#
for i in ls *.jpg
    do
		filename=${i/.jpg/.sm.jpg}
        mv $i $filename
    done
for i in ls *.sm.jpg
    do
		filename1=${i/.sm.jpg/.md.jpg}
        filename2=${i/.sm.jpg/.lg.jpg}
        cp $i $filename1
		cp $i $filename2
    done