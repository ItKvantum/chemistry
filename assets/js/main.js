<script>
//Пытается показать данные таблицы
$('.part').hover (
	function() {
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn();
	},
	function() {
		$('.description').fadeOut(50);
	}
)
</script>

<script>
//Функция показа формы регистрации
	function show(state)
	{
	document.getElementById('window').style.display = state;	
	document.getElementById('gray').style.display = state; 		
	}	
</script>

<script>
//Функция показа формы регистрации
	function show(state)
	{
	document.getElementByIdReg('window').style.display = state;
	document.getElementByIdReg('gray').style.display = state; 		
	}	
</script>
