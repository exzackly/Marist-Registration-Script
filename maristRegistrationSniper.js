// ==UserScript==
// @name         Marist Registration Sniper
// @author       EXZACKLY
// @version      7
// @description  Marist sub-second automatic registration script
// @include      https://ssb1.banner.marist.edu*
// @copyright    EXZACKLY INC
// ==/UserScript==

var domain = "https://ssb1.banner.marist.edu:8012/MARPROD/";
// Indicate time to fire script (typically 1 minute before registration begins)
// Year (YYYY), Month (0-11), Date, Hour (0-23), Minute
var fireTime = new Date(2017, 10, 7, 6, 59);
var CRNs = []; // Enter CRNS into array; separate CRNs with commas

var fireRegistrationSniper = function() {
    if (window.location == (domain + "bwskfreg.P_AltPin")) {
        if (document.getElementById("crn_id1") === null) {
            location.reload();
        } else {
            for (var i = 0; i < CRNs.length; i++) {
                document.getElementById("crn_id" + (i + 1)).value = CRNs[i];
            }
            document.getElementsByName("REG_BTN")[1].click();
        }
    } else if (window.location == (domain + "bwckcoms.P_Regs")) {
        alert("Registration Complete!");
    }
};

var timeUntil = fireTime.getTime() - Date.now();
setTimeout(fireRegistrationSniper, timeUntil);