// Aesthetic Packs

<script> 
function dandelion()
{
var img = document.getElementById("image");
img.src="packs/th/dandelion.png";
return false;
}
</script>

<script>
function dyes()
{
var img = document.getElementById("image");
img.src="packs/th/uniquedyes.png";
return false;
}
</script>

<script>
function powders()
{
var img = document.getElementById("image");
img.src="packs/th/uniquepowders.png";
return false;
}
</script>

<script>
function feather()
{
var img = document.getElementById("image");
img.src="packs/th/alternatefeather.png";
return false;
}
</script>

// Fixes & Consistency Packs
  
<script>
function bedandseat()
{
var img = document.getElementById("image");
img.src="packs/th/bedandseat.png";
return false;
}
</script>

<script>
function redcloth()
{
var img = document.getElementById("image");
img.src="packs/th/redcloth.png";
return false;
}
</script>

<script>
function bedandseat()
{
var img = document.getElementById("image");
img.src="packs/th/bedandseat.png";
return false;
}
</script>

<script>
function consistentwool()
{
var img = document.getElementById("image");
img.src="packs/th/betterwool.png";
return false;
}
</script>

// Accordion
  
<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
</script>

    }
  });
}
</script>
