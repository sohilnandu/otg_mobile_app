var data = [];
for(var i=0; i<500; i++) {
	res_text = '$';
	for(var j=0; j<i%5; j++){
		res_text += '$';
	}
    var item = {
        name: {text: "name " + i},
        cityState: {text: "City, State" + i},
        dollarSign: {text: res_text},
        template: (i%2) ? 'checkedInTemplate' : 'notCheckedInTemplate',
    };
    data.push(item);
}
$.section.setItems(data);

// $.list.addEventListener('itemclick', function(e) {
    // Ti.API.info('Item ' + e.itemIndex + ' was clicked');
    // var item = e.section.getItemAt(e.itemIndex);
    // if(e.bindId == 'leftimage') {
        // Ti.API.info('you clicked the image');
        // item.leftimage.image = "/dark_star.png";
        // e.section.updateItemAt(e.itemIndex, item);
    // }
// });
