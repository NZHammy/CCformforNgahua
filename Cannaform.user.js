// ==UserScript==
// @name         Cannaform filler
// @namespace    https://ham.software
// @version      1.0
// @description  Automatically fills out pharmacy information on Cannabis clinics form
// @author       Ham
// @match        https://cannabisclinic.co.nz/thc-controlled-drug-script-to-own-pharmacy/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var pharmacyNameFieldId = 'input_14_13_3';
    var pharmacyEmailFieldId = 'input_14_15';
    var pharmacyPhoneFieldId = 'input_14_14';
    var streetAddressFieldId = 'input_14_11_1';
    var addressLine2FieldId = 'input_14_11_2';
    var cityFieldId = 'input_14_11_3';
    var zipCodeFieldId = 'input_14_11_5';

    // Pharmacy information
    var pharmacyInfo = {
        name: 'Nga Hua Pharmacy',
        email: 'dispensary@ngahuapharmacy.co.nz',
        phone: '07 974 9570',
        streetAddress: '951 Wairere Drive',
        addressLine2: 'Hamilton East',
        city: 'Hamilton',
        zipCode: '3216'
    };

    // Fill out the WooCommerce form
    function fillWooCommerceForm() {
        document.getElementById(pharmacyNameFieldId).value = pharmacyInfo.name;
        document.getElementById(pharmacyEmailFieldId).value = pharmacyInfo.email;
        document.getElementById(pharmacyPhoneFieldId).value = pharmacyInfo.phone;
        document.getElementById(streetAddressFieldId).value = pharmacyInfo.streetAddress;
        document.getElementById(addressLine2FieldId).value = pharmacyInfo.addressLine2;
        document.getElementById(cityFieldId).value = pharmacyInfo.city;
        document.getElementById(zipCodeFieldId).value = pharmacyInfo.zipCode;


    }

    // Wait for the page to fully load before filling the form
    window.addEventListener('load', function() {
        fillWooCommerceForm();
    });
})();