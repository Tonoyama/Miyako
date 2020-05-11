var flickitySyncer = [];

// ページ内の[.flickity-syncer]のエレメントを取得する
var elms = document.getElementsByClassName( "flickity-syncer" );

// [elms]全てに、ループ処理でFlickityを適用する
for( var i=0,l=elms.length; l>i; i++ )
{
	flickitySyncer[i] = new Flickity( elms[i] , {contain: true, wrapAround: true, autoPlay: true} );
}
