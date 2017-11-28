$(function() {
  $("#input-1").change(function (){
     var fileName = $(this).val();
     $("#path-1").html(fileName);
  });
  $("#input-2").change(function (){
     var fileName = $(this).val();
     $("#path-2").html(fileName);
  });

 $('#btn-1').click(function () {
 	$('#input-1').click(); return false;
 });
 $('#btn-2').click(function () {
 	$('#input-2').click(); return false;
 });
});

