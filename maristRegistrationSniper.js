// ==UserScript==
// @name         Marist Registration Sniper
// @author       EXZACKLY
// @version      7
// @description  Marist sub-second automatic registration script
// @include      https://ssb.banner.marist.edu/*
// @copyright    EXZACKLY INC
// ==/UserScript==

var fireRegistrationSniper = function() {
    if (window.location == "https://ssb.banner.marist.edu/PROD11G/bwskfreg.P_AltPin") {
        if (document.getElementById("crn_id1") === null) {
            location.reload();
        } else {
            var crns = []; // Enter CRNS into array; separate CRNs with commas
            for (var temp = 0; temp < crns.length; temp++) {
                document.getElementById("crn_id" + (temp + 1)).value = crns[temp];
            }
            document.getElementsByName("REG_BTN")[1].click();
        }
    } else if (window.location == "https://ssb.banner.marist.edu/PROD11G/bwckcoms.P_Regs") {
        alert("Registration Complete!");
    }
};

// Indicate time to fire script (typically 1 minute before registration begins)
// Year (YYYY), Month (0-11), Date, Hour (0-23), Minute
var timeUntil = new Date(2015, 3, 2, 0, 13).getTime() - Date.now();
setTimeout(fireRegistrationSniper, timeUntil);