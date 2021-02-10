
    <script type="text/javascript">     
        function countDown(secs,surl){     
         var jumpTo = document.getElementById('jumpTo');
         jumpTo.innerHTML=secs;  
         if(--secs>0){     
             setTimeout("countDown("+secs+",'"+surl+"')",1000);     
             }     
         else{       
             location.href=surl;     
             }     
         }     
    </script> 
    <script type="text/javascript">
        window.onload=function(){
           countDown(5,'http://www.govae.com/')
        }
    </script>