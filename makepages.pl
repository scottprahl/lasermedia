#!/usr/bin/perl
#
# make_cad_pages - create web pages from PhotochemCAD database
# 
use warnings;
use strict;
use Getopt::Long;
use Pod::Usage;
use Text::Template;
use Date::Format;
use URI::Escape;
use HTML::Entities;
use Date::Manip::Date;

my $NAME='makepages';
my $VERSION = '0.1.0';

#####################
# DEAL WITH OPTIONS #
#####################
my ($opt_help,$opt_man,$opt_version);
my $opt_verbose = 1;
my $opt_number = 999;
my $opt_force = 0;

GetOptions(  'n:i'             => \$opt_number,
             'force'           => \$opt_force,
             'verbose'         => \$opt_verbose,
             'h|help'          => \$opt_help,
             'man'             => \$opt_man,
             'v|V|version'     => \$opt_version,
          ) ;

if ($opt_help)    {pod2usage(-verbose => 1);}
if ($opt_man)     {pod2usage(-verbose => 2);}
if ($opt_version) {print ("$0 version $VERSION\n"); exit(0);}

################
# MAIN PROGRAM #
################
my $site_dir = "lasermedia";

do_cmd("mkdir '$site_dir'") unless -d "$site_dir";
do_cmd("mkdir '$site_dir/data'" ) unless -d "$site_dir/data";
do_cmd("mkdir '$site_dir/html'") unless -d "$site_dir/html";

my $db_dir = "src";
my $db  = "contents.txt";
open (my $DB, '<', "$db_dir/$db") or die "Could not open database '$db_dir/$db'";

my $count = 0;

my @lt = localtime(time);
my $date = strftime("%e %B %Y", @lt);
$date =~ s/^\s+//;

my %medium;
my %medium_class;
my %all_compounds;

while (<$DB>){
	$count++;
	last if $opt_number>0 and  $count > $opt_number;	
	next if $opt_number<0 and $count != -$opt_number;
	
	print "************   $count   ****************\n";
	%medium = hash_from_db_lines($_, $db_dir);
	$medium{'name_id'} = sprintf "%03d", $count;
	$medium{'date'} = $date;
	$medium{'name_path_file'} = $db_dir . "/" . $medium{'name_file'};
	$medium{'name_simple'} = $medium{'name_file'};
	$medium{'name_simple'} =~ s/\d*\.TXT//;
	$medium{'name_simple'} =~ s/^(.)(.)/$1\L$2:/;
	
	print "$medium{'name_path_file'}\n";
	
	create_abs_text($db_dir, $site_dir);
	create_abs_js($db_dir, $site_dir);
	create_ems_text($db_dir, $site_dir);
	create_ems_js($db_dir, $site_dir);
	create_html($db_dir, $site_dir);
	
	if (1|| $opt_number < 0) {
		for (sort keys %medium) {
			print "$_ = '$medium{$_}'\n";
		}
	}
	
	$all_compounds{$medium{'name_id'}} = $medium{'name_chem_html'}
}
close $DB;

create_master_index($site_dir, %all_compounds);
#create_class_index($site_dir, \%all_compounds, \%medium_class);

exit 0;

###############
# SUBROUTINES #
###############

#
# wrapper for shell commands
#
sub do_cmd
{
	my $cmd = shift;
	print ">>> $cmd\n" if $opt_verbose;
	my $result = `$cmd`;
#	print $result;
	return $result;
}

sub need_to_recreate {
	my $original = shift;
	my $new = shift;
	
	return 1 if $opt_force or $opt_number < 0;
	
	return 0 unless -e $original;
	return 1 unless -e $new;
	
	# -M gives the script start time minus file modification time
	# thus the newer file will be greater in the comparison
	return 1 if -M $original < -M $new;
	return 0;
}

#
# remove start of compound name for sorting
#
sub sortname 
{
	my $name = shift;
	$name =~ s/^ +//;
	$name =~ s/^bis//i;
	$name =~ s/^cis-//i;
	$name =~ s/^trans-//i;
	$name =~ s/^p-//i;
	$name =~ s/^N,N'-//;
	$name =~ s/^[-,'0-9(]+//;
	$name =~ s/^bis\(//;
	$name = lc($name);
	$name
}

sub fixdate {
	my $indate = shift;
	return '' unless defined $indate;

    my $date = new Date::Manip::Date;
	$date->parse($indate);
    return $date->printf("%e %B %Y");
}

sub create_master_index
{
	my $site_dir = shift;
	my %all_compounds = @_;
	
	my $list =  "";
	for (sort keys %all_compounds) {
		my $key = $_;
		my $value = $all_compounds{$key};
		$list .= "<p> <a href=\"html/$key.html\"> $value </a></p>\n";
	}

	my %h = ();
	$h{'list'} = $list;
	$h{'date'} = $date;
	my $tmpl = Text::Template->new(TYPE => 'FILE', SOURCE => 'index.template');
	open (my $OUT, '>', "$site_dir/index.html") or die "could not open '$site_dir/index.html'";
	print $OUT $tmpl->fill_in(HASH => \%h);;
	close $OUT;

	%h = ();
	$h{'name_id'} = '../index';
	$tmpl = Text::Template->new(TYPE => 'FILE', SOURCE => 'redirect.template');
	open ($OUT, '>', "$site_dir/html/index.html") or die "could not open '$site_dir/html/index.html'";
	print $OUT $tmpl->fill_in(HASH => \%h);;
	close $OUT;
}

sub create_class_index
{
	my $site_dir = shift;
	my $all_ref = shift;
	my $class_ref = shift;

	my %all_compounds = %$all_ref;
	my %medium_class = %$class_ref;
	
	my %classes;
	for (values %medium_class) {
		$classes{$_}++;
	}

	my $list =  "<h1>Compounds by Class</h1>\n";
	$list .= '<p style="text-align=center"><a href="index.html"> Alphabetical Listing </a></p>' . "\n";
	$list .= "<br>\n";
	for (sort keys %classes) {
		my $class = $_;
		print "$class = $classes{$class}\n";
		$list .= "<h3>$class</h3>\n";
		my %h = ();
		for (ids_having_class($class, $class_ref)) {
			my ($k,$v) = kv_for_id($_,$all_ref);
			$h{$k} = $v;
		}

		for (sort keys %h) {
			my $key = $_;
			my ($sname,$id) = split '@';
			my $value = $h{$key};
			$list .= "<p> <a href=\"html/$id.html\"> $value </a></p>\n";
		}
	}
	
	my %h = ();
	$h{'list'} = $list;
	$h{'date'} = $date;
	my $tmpl = Text::Template->new(TYPE => 'FILE', SOURCE => 'index.template');
	open (my $OUT, '>', "$site_dir/class.html") or die "could not open '$site_dir/class.html'";
	print $OUT $tmpl->fill_in(HASH => \%h);;
	close $OUT;
}

sub ids_having_class
{
	my $class = shift;
	my $class_ref = shift;
	my %cc = %$class_ref;
	
	my @h;
	for (keys %cc) {
		push @h, $_ if $cc{$_} eq $class;
	}
	return @h;
}

sub kv_for_id
{
	my $id = shift;
	my $all_ref = shift;
	my %all = %$all_ref;
	
	for (keys %all) {
		my $key = $_;
		my ($sname,$this_id) = split '@';
		return ($key, $all{$key}) if $id == $this_id;
	}
	return ('missing','missing');
}

sub create_abs_text
{
	my $db_dir = shift;
	my $site_dir = shift;
	
	return unless $medium{'type'} =~ /Absorbance/;
	
	my $name = $medium{'name_chem_txt'};
	my $src_path = "$db_dir/" . $medium{'name_file'};
	if (!defined $src_path) {
		print "missing absorption spectrum for $name\n";
		$medium{'name_path_abs'} = undef;
		$medium{'name_path_abs_orig'} = undef;
		return;
	}
	
	my $name_path_abs = "$site_dir/data/$medium{'name_id'}-abs.txt";
	$medium{'name_path_abs'} = $name_path_abs;
	my $orig_path = "$site_dir/data/$medium{'name_id'}-orig-abs.txt";
	$medium{'name_path_abs_orig'} = $orig_path;
	
	if (need_to_recreate($src_path,$orig_path)) {
        do_cmd("cp '$src_path' '$orig_path'");
	}

	if (need_to_recreate($src_path,$name_path_abs)) {
        my $abs_tmpl = Text::Template->new(TYPE => 'FILE', SOURCE => 'abs.template');
        my $abs_hdr = $abs_tmpl->fill_in(HASH => \%medium);

		my $minlambda = $medium{'lambda_min'};
		my $maxlambda = $medium{'lambda_max'};
		my $deltalambda = $medium{'lambda_delta'};
		my $n = ($maxlambda - $minlambda)/$medium{'lambda_delta'} + 1;

        open (my $IN, '<', $src_path) or die "could not open '$src_path'";
        while (<$IN>) {
        	last if /EOH/;
        }
        
        open (my $ABS, '>', $name_path_abs) or die "could not open '$name_path_abs'";
        print $ABS $abs_hdr;
           
		my $N = <$IN>;
		$N =~ s/^\s+//;        
		$N =~ s/\s+$//;
		$N = int($N+0.1);
		$n = int($n+0.1);
		die "n=$n is not N=$N" unless $n == $N;
		
		for (1..$N) {
			my $i = $_-1;
			my $y = <$IN>;
			$y =~ s/^\s+//;        
			$y =~ s/\s+$//;
			$y = int($y);
			$y = 1 if $y <= 0;
			
			my $x = ($minlambda + $i * $deltalambda);
			print $ABS "$x\t$y\n";
        }
        close $IN;
        close $ABS;
	}
}

# TOLUENE.SPT
# Toluene (Cyclohex) 7-13-95
# Emission Scan
# Number of Scans 1
# Start 2.520000e+002 Nanometers, End 4.800000e+002 Nanometers
# Increment 5.000000e-001 Nanometers, Integration Time 1.000000e+000 Seconds
# Excit Mono 2.420000e+002 Nanometers
# Excit Mono Slits: (mm) 0.500
# Emiss Mono Slits: (mm) 0.500
# Acquisition Mode s, Auto Zero Yes
# Blank Subtraction File 
# Correction Factor File 
# ...............................................................................
sub create_ems_text
{
	my $db_dir = shift;
	my $site_dir = shift;
		
	return unless $medium{'type'} =~ /emission/;
	
	my $name = $medium{'name_chem_txt'};
	my $src_path = "$db_dir/" . $medium{'name_file'};

	if (! -e $src_path) {
		print "missing emission spectrum for $name\n";
		return;
	}
	
	my $name_path_ems = "$site_dir/data/$medium{'name_id'}-ems.txt";
	$medium{'name_path_ems'} = $name_path_ems;
	my $orig_path = "$site_dir/data/$medium{'name_id'}-orig-ems.txt";
	$medium{'name_path_ems_orig'} = $orig_path;

	if (need_to_recreate($src_path,$orig_path)) {
        do_cmd("cp '$src_path' '$orig_path'");
	}

	return unless need_to_recreate($src_path,$name_path_ems);
	
	if (need_to_recreate($src_path,$name_path_ems)) {
        my $tmpl = Text::Template->new(TYPE => 'FILE', SOURCE => 'ems.template');
        my $head = $tmpl->fill_in(HASH => \%medium);

		my $minlambda = $medium{'lambda_min'};
		my $maxlambda = $medium{'lambda_max'};
		my $deltalambda = $medium{'lambda_delta'};
		my $n = ($maxlambda - $minlambda)/$medium{'lambda_delta'} + 1;

        open (my $IN, '<', $src_path) or die "could not open '$src_path'";
        while (<$IN>) {
        	last if /EOH/;
        }
        
        open (my $EMS, '>', $name_path_ems) or die "could not open '$name_path_ems'";
        print $EMS $head;
           
		my $N = <$IN>;
		$N =~ s/^\s+//;        
		$N =~ s/\s+$//;
		$N = int($N+0.1);
		$n = int($n+0.1);
		if ($N != $n) {
			print 'x' x 30, $medium{'name_id'}, 'x' x 30, "\n";
			print "expected is $n, actual is $N\n";
			print 'x' x 60, "\n";
		}
        
		my @y = ();
		my $ymax = 0;
		for (1..$N) {
			my $y = <$IN>;
			$y =~ s/^\s+//;        
			$y =~ s/\s+$//;
			$ymax = $y if $ymax < $y;
			push @y, $y;
		}
				
		for (1..$N) {
			my $i = $_-1;
			my $x = ($minlambda + $i * $deltalambda);
			print $EMS "$x\t", $y[$i]/$ymax, "\n";
        }
        close $IN;
        close $EMS;
	}
}

sub create_abs_js
{
	my $db_dir = shift;
	my $site_dir = shift;
		
	return unless $medium{'type'} =~ /Absorbance/;

	my $name = $medium{'name_file'};
	my $src_path = $medium{'name_path_abs'};
	if (!defined $src_path or ! -e $src_path) {
		print "missing preprocessed absorption spectrum '$src_path' for $name\n";
		$medium{'name_path_abs_js'} = undef;
		return;
	}

	my $js = "$medium{'name_id'}-abs.js";
	$medium{'abs_script'}  = "<script type=\"text/javascript\" src=\"$js\"></script>";
	my $js_path = "$site_dir/html/$js";
	$medium{'name_path_abs_js'} = $js_path;
	
	if (need_to_recreate($src_path,$js_path)) {
		my %h;
		$h{'abs_unicode_name'} = $medium{'name_chem_utf8'};
		$h{'x_abs_start'} = $medium{'lambda_min'};
		$h{'x_abs_interval'} = $medium{'lambda_delta'};
		$h{'abs_name'} = $medium{'name_file'};

#		$h{'abs_js_data'} = do_cmd("datacolumn -js -keep 1,2 '$src_path'");
		$h{'abs_js_data'} = do_cmd("datacolumn -js -keep 2 '$src_path'");
        my $tmpl = Text::Template->new(TYPE => 'FILE', SOURCE => 'abs-js.template');
        my $contents = $tmpl->fill_in(HASH => \%h);
        open (my $JS, '>', $js_path) or die "could not open '$js_path'";
        print $JS $contents;
        close $JS;
	}
}

sub create_ems_js
{
	my $db_dir = shift;
	my $site_dir = shift;

	return unless $medium{'type'} =~ /emission/;
		
	my $name = $medium{'name_file'};
	my $src_path = $medium{'name_path_ems'};
	$medium{'name_path_ems_js'} = undef;
	if (!defined $src_path or ! -e $src_path) {
		return;
	}

	my $js = "$medium{'name_id'}-ems.js";
	$medium{'ems_script'}  = "<script type=\"text/javascript\" src=\"$js\"></script>";
	my $js_path = "$site_dir/html/$js";
	$medium{'name_path_ems_js'} = $js_path;
	
	if (need_to_recreate($src_path,$js_path)) {
		my %h;
		$h{'ems_unicode_name'} = $medium{'name_chem_utf8'};
		$h{'x_ems_start'} = $medium{'lambda_min'};
		$h{'x_ems_interval'} = $medium{'lambda_delta'};
		$h{'ems_name'} = $medium{'name_file'};

		$h{'ems_js_data'} = do_cmd("datacolumn -js -keep 2 '$src_path'");
        my $tmpl = Text::Template->new(TYPE => 'FILE', SOURCE => 'ems-js.template');
        my $contents = $tmpl->fill_in(HASH => \%h);
        open (my $JS, '>', $js_path) or die "could not open '$js_path'";
        print $JS $contents;
        close $JS;
	}
}

sub create_html
{
	my $db_dir = shift;
	my $site_dir = shift;
    	
	my $html_path = "$site_dir/html/$medium{'name_id'}.html";
	$medium{'name_path_html'} = $html_path;
	
    my $top = Text::Template->new(TYPE => 'FILE', SOURCE => 'html-top.template');
    my $abs = Text::Template->new(TYPE => 'FILE', SOURCE => 'html-abs.template');
    my $ems = Text::Template->new(TYPE => 'FILE', SOURCE => 'html-ems.template');
    my $bot = Text::Template->new(TYPE => 'FILE', SOURCE => 'html-bot.template');
    
    open (my $OUT, '>', $html_path) or die "could not open '$html_path'";
    print $OUT $top->fill_in(HASH => \%medium);
    print $OUT $abs->fill_in(HASH => \%medium) if $medium{'name_path_abs'};
    print $OUT $ems->fill_in(HASH => \%medium) if $medium{'name_path_ems'};
    print $OUT $bot->fill_in(HASH => \%medium);
    close $OUT;
}

#   11100 15  1 01NYAG9.SP PYAG   MS  .0000 U S1 012288 00.01   1
#   PROGRAM PE-CONVERT     VER 02.30
#   USER MS  DATE & TIME  1988 01 28 15.06 30.73    1.8000    295K U
#  AU1 ND 100     0     0 YAG             0.325000 - 0.550000 .00010
#  FILE NAME ON PE-3600 = 001 NYAG9.SP      ON PC = 001NYAG9.SP
#  NO_POINTS  =  2251.    pts   DATA_INTV = 0.000100 µm
#  MIN_LAMBDA =  0.325000 µm     MIN_DATA =    0.                   
#  MAX_LAMBDA =  0.550000 µm     MAX_DATA =  45372.0
#  SCANSPEED  = .015      µm/min SLITWIDTH=  0.00020 µmITA =   0.
#        RESP =   0.5     sec        ISMS =   0.      DATE =88/01/22
#        INST = 509.                    ? =   0.
#  THE ND:YAG SAMPLE WAS FOUND IN CHUCK'S LAB. ASSUME 1% ND
#  CONCENTRATION. 1.8 MM THICK. STORM
#  converted to AU by Mark Storm.  header added by hand
#  ND:YAG,1%ND,1.8MMTHICK,FINAL RUN,HIGH RES.,STORM                 
#   EOH     (1X,F11.4)                                              

sub hash_from_db_lines
{
	my $content_line = shift;
	my $db_dir = shift;
	
	$content_line =~ s/\s+$//;
	my ($filename, $chemname) = split "\t", $content_line;
	$filename .= '.TXT';
	
	my %h;
	$h{'name_file'} = $filename;
	$h{'name_chem_txt'} = $chemname;
	$h{'name_chem_html'} = $chemname;
	$h{'name_chem_html'} =~ s!(\d+)!<sub>$1</sub>!g;
	$h{'name_chem_utf8'} = $chemname;
	$h{'name_chem_utf8'} =~ s/(\d)/\\u208$1/g;

	open (my $SPC, '<', "$db_dir/$filename") or die "could not open '$filename'";

print "Reading $db_dir/$filename\n";

#  11100  15  1    01NYAG9.SP  PYAG   MS   .0000 U  S1  012288  00 .01  1
	my $line = <$SPC>;
	$line =~ s/\s+$//;
print "line 1 ='$line'\n";
	$line =~ s/^ +//;
    my ($id, $hdr_lines, $cols, $orig_name, $sample, 
	    $initials, $excitation, $polarization, $detector, 
	    $date, $time, $repl) =
	split ' ', $line;
	
#	$h{'header_lines'} = $hdr_lines;
	$h{'name_path_orig_name'} = $orig_name;
	$h{'name_sample'}    = $sample;
	$h{'initials'}  = $initials;
	$h{'lambda_exc'} = $excitation*1000;
	$h{'polarization'} = $polarization;
	$h{'exp_date'} = $date;
#	$h{'exp_time'} = $time;
	$h{'repl'} = $repl;

	$h{'lambda_pol'} = 'The incident light ';
	if ($polarization =~ /([SP])/) {
		$h{'lambda_pol'} .= "had $1-polarization.";
	} elsif ($polarization =~ /H/) {
		$h{'lambda_pol'} .= 'was horizontally polarized.';
	} elsif ($polarization =~ /V/) {
		$h{'lambda_pol'} .= 'was vertically polarized.';
	} elsif ($polarization =~ /U/) {
		$h{'lambda_pol'} .= 'was unpolarized.';
	} else {
		$h{'lambda_pol'} .= 'had unknown polarization.';
	}
	
	if ($id eq '11100') {
		$h{'type'} = 'Absorbance for unity concentration per meter';
	} elsif ($id eq '11102') {
		$h{'type'} = 'Normalized emission';
	} elsif ($id eq '11104') {
		$h{'type'} = 'Normalized excitation';
	} else {
		print "$filename does not have the right format!";
		return;
	}

	$h{'exp_date'} =~ s!(..)(..)$!/$1/19$2!;
	$h{'exp_date'} =~ s/^0//;
	$h{'exp_date'} = fixdate($h{'exp_date'});

	if ($detector eq 'S1') {
		$h{'detector'} = 'phototube';
	} elsif ($detector eq 'SI') {
		$h{'detector'} = 'silicon photodiode';
	} elsif ($detector eq 'I1') {
		$h{'detector'} = 'phototube and silicon photodiode';
	} elsif ($detector eq 'PS') {
		$h{'detector'} = 'lead sulfide';
	} elsif ($detector eq 'IA') {
		$h{'detector'} = 'indium arsenide';
	} elsif ($detector eq 'IS') {
		$h{'detector'} = 'indium antimonide';
	} elsif ($detector eq 'HT') {
		$h{'detector'} = 'mercury cadmium teluride';
	} elsif ($detector eq 'HS') {
		$h{'detector'} = 'mercury cadmium selenide';
	} else {
		$h{'detector'} = 'unknown';
	}
	
#  PROGRAM  PE-CONVERT     VER 02. 30
	$line = <$SPC>;
	$line =~ s/\s+$//;
print "line 2 ='$line'\n";
	$line =~ m/PROGRAM +(\S+(?: MAC)?) +(?:VER|VERSION) +(\d+)\.(\d+)/;
	$h{'program'} = "$1 version $2.$3";
	
#  USER  MS  DATE & TIME  1988  01 28  15.06   30.73            1.8000       295  KU
	$line = <$SPC>;
	$line =~ s/\s+$//;
print "line 3 ='$line'\n";
	$line =~ s/^.*TIME\s+//;
	my ($y,$m,$d,$hm,$s,$thickness,$temp,$sample_pol) = split ' ', $line;
	$m =~ s/^0//;
	$h{'rec_date'} = fixdate("$m/$d/$y");
	$hm =~ s/\./:/;
#	$h{'rec_time'} = "$hm:$s";
#	$h{'temperature'} = $temp;
	$h{'thickness'} = $thickness;
	$h{'sample_alignment'} = $sample_pol;
	
	$h{'sample_polarization'} = 'The sample was cut so that light propagated along';
	if ($sample_pol =~ /([ABC])/i) {
		$h{'sample_polarization'} .= ' the ' . lc($1) . '-crystallographic-axis of the crystal.';
	} elsif ($sample_pol =~ /([XYZ])/i) {
		$h{'sample_polarization'} .= ' the ' . lc($1) . '-axis of the crystal.';
	} else {
		$h{'sample_polarization'} = 'The sample orientation was unknown.';
	}
	
# AU1 ND 100     0          0        YAG                       0 .325000   -  0.550000    .00010
	$line = <$SPC>;
	$line =~ s/\s+$//;
print "line 4 ='$line'\n";
	$line =~ / (..)(.) (..)(....)(..)(....)(..)(....) ([^ ]+) +([\d.]+) +- +([\d.]+) +([\d.]+)/;
	$h{'data_type'} = $1;
#	$h{'fixed'} = $2;
	$h{'sample_atom'} = $3;
	$h{'concentration'} = $4;
	$h{'sensitizer1'} = $5;
	$h{'concentration1'} = $6;
#	$h{'sensitizer2'} = $7;
#	$h{'concentration2'} = $8;
	$h{'sample_host'} = $9;
	$h{'lambda_min'} = $10*1000;
	$h{'lambda_max'} = $11*1000;
	$h{'lambda_delta'} = $12*1000;
	$h{'concentration'} =~ s/ /0/g;
	$h{'concentration'} =~ s/(.)/0.$1/;
	$h{'concentration'} =~ s/\.?0+$//;
	$h{'concentration1'} =~ s/ /0/g;
	$h{'concentration1'} =~ s/(.)/0.$1/;
	$h{'concentration1'} =~ s/\.?0+$//;
#	$h{'concentration2'} =~ s/ /0/g;
#	$h{'concentration2'} =~ s/(.)/0.$1/;

	$h{'sample_atom'} =~ s/(.)(.)/$1\L$2/;
	
	if ($h{'data_type'} eq 'TM') {
		$h{'data_type'} = 'transmission';
	} elsif ($h{'data_type'} eq 'AB') {
		$h{'data_type'} = 'absorption';
	} elsif ($h{'data_type'} eq 'AU') {
		$h{'data_type'} = 'absorption for unity concentration';
	} elsif ($h{'data_type'} eq 'EM') {
		$h{'data_type'} = 'emission';
	} elsif ($h{'data_type'} eq 'EN') {
		$h{'data_type'} = 'normalized emission';
	} elsif ($h{'data_type'} eq 'EX') {
		$h{'data_type'} = 'excitation source spectra';
	} elsif ($h{'data_type'} eq 'XN') {
		$h{'data_type'} = 'normalized source excitation spectra';
	} else {
		$h{'data_type'} .= ' (unknown)';
	}

	my $note = '';
	for (5 .. $hdr_lines) {
		$note .= <$SPC>;
	}
	$h{'note'} = fix_note($note);
	
	close $SPC;
	%h
}

sub fix_note
{
	my $note = shift;
	$note =~ s/\s+/ /g;      # prefix each line with #
	$note =~ s/\s+$//;       # no spaces at end of each line
	$note =~ s/^ //g;        # multiple spaces to one space
	$note =~ s/([^.])$/$1./; # terminate with period
	
	$note
}


sub commify
{
    my $text = reverse $_[0];
    $text =~ s/(\d\d\d)(?=\d)(?!\d*\.)/$1,/g;
    return scalar reverse $text;
}


# Lay down some of that perl pod action.
=pod

=head1 NAME

B<makepages> - create web pages from NASA laser database

=head1 SYNOPSIS

B<makepages> [-help] [-man] [-n #] <database>

=head1 DESCRIPTION

B<makepages> will try to construct all the web pages for a
lasermedia directory.

=head1 OPTIONS

        -n #                number of chemicals to process
        -verbose            show all shell calls
        -javascript         emit javascript

        -h | -help          print this message
        -man                detailed help
        -v | -version       version information

=head2 EXAMPLES

		makepages -n 2                make two files
		makepages -n -25              recreate only 25th file

=head1 BUGS


=head1 SEE ALSO

make_cad_pages

=head1 COPYRIGHT

B<makepages> is copyrighted by Scott Prahl.

=cut

