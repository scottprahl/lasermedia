#
#  create web pages for lasermedia
#

SRC =

all:
	~/Documents/Code/git/lasermedia/makepages.pl

one:
	~/Documents/Code/git/lasermedia/makepages.pl -n '-1'

install:
	rsync -ave ssh lasermedia/ omlc.org:/var/www/html/spectra/lasermedia

clean:
	rm -rf lasermedia

