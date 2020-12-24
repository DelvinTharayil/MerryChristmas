$(document).ready(function () {

    $("#Evpage1,#EvbackB,#Evopen,#EvbackT,#Evline,.snowAll,.pagefadeout,#Evstamp,#clicktext1,.hover").css({ animation: "null" })
     $("#Reindeer,#Sman,#fadethings,#content,#bgletter,#Evpageup,#forestbg,#christmastextL,#wishes,#christmastext").css({ animation: "null" })
     $("#christmastext").fadeOut()
    $("body").click(function () {
        $("#Evpage1,#EvbackB,#Evopen,#EvbackT,#Evline,.snowAll,.pagefadeout,#Evstamp,#clicktext1,.hover").css({ animation: "" })
        $("#Reindeer,#Sman,#fadethings,#content,#bgletter,#Evpageup,#forestbg,#christmastextL,#wishes,#christmastext").css({ animation: "" })
        $( "#christmastext" ).delay( 600).fadeIn(1000);
        $("#mainhover1").css({"transform":"translateY(-20px)"})

    })

    
})       

