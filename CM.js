$(document).ready(function () {

    $("#Evpage1,#EvbackB,#Evopen,#EvbackT,#Evline,#Snow1,#Snow2,#Snow3,.pagefadeout,#Evstamp,#clicktext1,#Hbell,#Hstick,#Hsock,#Htree,#Hhat,#Hball,#Hgift").css({ animation: "null" })
     $("#Reindeer,#Sman,#fadethings,#content,#bgletter,#Evpageup,#forestbg,#christmastextL,#wishes,#christmastext").css({ animation: "null" })
     $("#christmastext").fadeOut()
    $("body").click(function () {
        $("#Evpage1,#EvbackB,#Evopen,#EvbackT,#Evline,#Snow1,#Snow2,#Snow3,.pagefadeout,#Evstamp,#clicktext1,#Hbell,#Hstick,#Hsock,#Htree,#Hhat,#Hball,#Hgift").css({ animation: "" })
        $("#Reindeer,#Sman,#fadethings,#content,#bgletter,#Evpageup,#forestbg,#christmastextL,#wishes,#christmastext").css({ animation: "" })
        $( "#christmastext" ).delay( 600).fadeIn(1000);
        $("#mainhover1").css({"transform":"translateY(-20px)"})

    })

    
})       

// $("").css({ animation: "" })
          // $("").css({ animation: "null" })
