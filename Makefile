#
#  create web pages for lasermedia
#

SRC =

all:
	~/Documents/Code/git/lasermedia/makepages

one:
	~/Documents/Code/git/lasermedia/makepages -n '-1'

install:
	rsync -ave ssh lasermedia/ omlc.org:/var/www/html/spectra/lasermedia

clean:
	rm -rf lasermedia

