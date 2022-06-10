function initMap() {
	const NY = { lat: 17.44870, lng: 78.39116 };
	const Mymap = new google.maps.Map(document.getElementById("map"), {
		zoom: 16,
		center: NY,
	});
	const marker = new google.maps.Marker({
		position: NY,
		map: Mymap,
		title: 'Plot no, 273, Road No. 16, Ayyappa Society, Mega Hills, Madhapur, Telangana 500081, Индия'
	});
}