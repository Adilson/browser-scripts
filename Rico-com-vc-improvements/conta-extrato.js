var form = $('section.widget-customer-overview form');
var div = $('<div class="margin-bottom row clearfix">');
var select = $('<select>');
var year = (new Date()).getFullYear();
var month = (new Date()).getMonth();
for (var i=0; i<12; i++)
{
	var curMonth = month-i-1;
	var curYear = year;
	while (curMonth < 0)
	{
		curMonth += 12;
		curYear--;
	}
	var label = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'][curMonth] + ' ' + curYear;
	var option = $('<option>', {html: label});

	//TODO: Test this section
	option[0].setAttribute('data-month',curMonth);
	option[0].setAttribute('data-year',curYear);
	//TODO: End of section

	option.appendTo(select);
}
var divCol = $('<div class="col-md-12">');
select.appendTo(divCol);
divCol.appendTo(div);
div.appendTo(form);


window.setMonth = function(year, month)
{
	//Muda visualização para este mês
	//TODO: Implement
}


//TODO: Test this handler
select.bind('change', (e)=>{
	var selectedItem = this.options[this.selectedIndex];
	var curYear = parseInt(selectedItem.getAttribute('data-year'),10);
	var curMonth = parseInt(selectedItem.getAttribute('data-month'),10);
	window.setMonth(curYear,curMonth);
});
