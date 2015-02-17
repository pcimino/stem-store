for i in ls *.jpg
    do
		filename=${i/.jpg/.sm.jpg}
        mv $i $filename
    done