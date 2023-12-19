// game suit

var tanya = true
while(tanya){

	//player memilih
	var p =prompt('pilih : Gajah, Semut, atau Orang');

	//pilihan komputer dengan random pakai fungtion math
	var kom = Math.random();

	if( kom < 0.34 ){
		kom = 'gajah';
	} else if( kom >= 0.34 && kom < 0.67) {
		kom = 'orang';
	}else{
		kom = 'semut';
	}
	console.log(kom);

	var hasil = '';
	//rules

	if( p == kom){
		hasil = 'SERI'; 
	}else if ( p == 'gajah'){
		hasil=(kom == 'orang') ? 'MENANG' : 'KALAH';
	}else if (p == 'orang'){
		hasil = (kom == 'gajah') ? 'KALAH' : 'MENANG';
	}else if (p=='semut'){
		hasil = (kom == 'orang') ? 'KALAH' : 'MENANG';
	}else {
		hasil = 'pilihan salah'
	}

	//tampilannya
	alert(p +' \nKomputer memilih : '+kom+' \n hasil: ' +hasil);

	tanya = confirm('bermain lagi?');

}
var g =prompt('TERIMAKASIH TELAH BERMAIN \n masukan nama anda:')
alert('Sampai ketemu \n '+g);







