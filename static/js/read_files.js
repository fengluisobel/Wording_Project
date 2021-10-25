<script>
function handleFiles(files)
{
  if(files.length){
    let file = files[0];
    let reader = new FileReader();
    reader.onload = function(){
      document.getElementById('text').innerHTML = this.result;
    };
    reader.readAsText(file);
   }
}
</script>