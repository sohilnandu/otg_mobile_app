var data = [];

function doTransform(model) {
	var o = model.toJSON();
	assets = o.TotalIdentifiedAssets;
	switch(assets) {
    case "0-0":
        res_text = '$';
        break;
    case "$100,000-$499,999":
        res_text = '$$';
        break;
    case "$500,000-$999,999":
        res_text = '$$$';
        break;
    case "$1,000,000-$4,999,999":
        res_text = '$$$$';
        break;
    case "$5,000,000-$9,999,999":
        res_text = '$$$$$';
        break;
    case "$10,000,000-$24,999,999":
        res_text = '$$$$$$';
        break;
    case "$25,000,000+":
        res_text = '$$$$$$$';
        break;
    default:
        res_text = '$';
   };

	o.name = o.FirstName +" " + o.LastName;
    o.cityState = o.City + ", " + o.State; 
    o.dollarSign = res_text;
    o.template =  o.CheckedIn ? 'checkedInTemplate' : 'notCheckedInTemplate';
	return o;
}
function checkedInFilter(collection){
	return collection.where({CheckedIn:1}); 
}

// for(var i=0; i<500; i++) {
	// res_text = '$';
	// for(var j=0; j<i%5; j++){
		// res_text += '$';
	// }
    // var item = {
        // name: {text: "name " + i},
        // cityState: {text: "City, State" + i},
        // dollarSign: {text: res_text},
        // template: (i%2) ? 'checkedInTemplate' : 'notCheckedInTemplate',
    // };
    // data.push(item);
// }
// $.section.setItems(data);

// $.list.addEventListener('itemclick', function(e) {
    // Ti.API.info('Item ' + e.itemIndex + ' was clicked');
    // var item = e.section.getItemAt(e.itemIndex);
    // if(e.bindId == 'leftimage') {
        // Ti.API.info('you clicked the image');
        // item.leftimage.image = "/dark_star.png";
        // e.section.updateItemAt(e.itemIndex, item);
    // }
// });
