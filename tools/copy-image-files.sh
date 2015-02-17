for i in ls *.sm.jpg
    do
		filename1=${i/.sm.jpg/.md.jpg}
        filename2=${i/.sm.jpg/.lg.jpg}
        cp $i $filename1
		cp $i $filename2
    done