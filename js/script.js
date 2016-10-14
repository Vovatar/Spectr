'use strict';
var catalog = document.getElementById('catalog');
var catalogMenu = document.getElementById('catalogMenu');
var specificationsTable = document.getElementById('specifications-table');
var descriptionBtn = document.getElementById('description-btn');
var description = document.getElementById('description');
var specificationsBtn = document.getElementById('specifications-btn');
var specifications = document.getElementById('specifications');
var documentationBtn = document.getElementById('documentation-btn');
var documentation = document.getElementById('documentation');
var componentsBtn = document.getElementById('components-btn');
var components = document.getElementById('components');
var optionsBtn = document.getElementById('options-btn');
var options = document.getElementById('options');
var inputRus = document.getElementById('input-rus');
var inputEng = document.getElementById('input-eng');
var languageRus = document.getElementById('language-rus');
var languageEng = document.getElementById('language-eng');

descriptionBtn.addEventListener('click', function (event) {
  event.preventDefault();
  description.classList.remove('hide-xlg');
  descriptionBtn.classList.add('li-active');
  specifications.classList.add('hide-xlg');
  documentation.classList.add('hide-xlg');
  components.classList.add('hide-xlg');
  options.classList.add('hide-xlg');
  specificationsBtn.classList.remove('li-active');
  documentationBtn.classList.remove('li-active');
  componentsBtn.classList.remove('li-active');
  optionsBtn.classList.remove('li-active');
});

specificationsBtn.addEventListener('click', function (event) {
  event.preventDefault();
  specifications.classList.remove('hide-xlg');
  specificationsBtn.classList.add('li-active');
  description.classList.add('hide-xlg');
  documentation.classList.add('hide-xlg');
  components.classList.add('hide-xlg');
  options.classList.add('hide-xlg');
  descriptionBtn.classList.remove('li-active');
  documentationBtn.classList.remove('li-active');
  componentsBtn.classList.remove('li-active');
  optionsBtn.classList.remove('li-active');
});

documentationBtn.addEventListener('click', function (event) {
  event.preventDefault();
  specifications.classList.add('hide-xlg');
  description.classList.add('hide-xlg');
  documentation.classList.remove('hide-xlg');
  documentationBtn.classList.add('li-active');
  components.classList.add('hide-xlg');
  options.classList.add('hide-xlg');
  descriptionBtn.classList.remove('li-active');
  specificationsBtn.classList.remove('li-active');
  componentsBtn.classList.remove('li-active');
  optionsBtn.classList.remove('li-active');
});

componentsBtn.addEventListener('click', function (event) {
  event.preventDefault();
  specifications.classList.add('hide-xlg');
  description.classList.add('hide-xlg');
  documentation.classList.add('hide-xlg');
  components.classList.remove('hide-xlg');
  componentsBtn.classList.add('li-active');
  options.classList.add('hide-xlg');
  specificationsBtn.classList.remove('li-active');
  descriptionBtn.classList.remove('li-active');
  documentationBtn.classList.remove('li-active');
  optionsBtn.classList.remove('li-active');
});

optionsBtn.addEventListener('click', function (event) {
  event.preventDefault();
  specifications.classList.add('hide-xlg');
  description.classList.add('hide-xlg');
  documentation.classList.add('hide-xlg');
  components.classList.add('hide-xlg');
  options.classList.remove('hide-xlg');
  optionsBtn.classList.add('li-active');
  specificationsBtn.classList.remove('li-active');
  descriptionBtn.classList.remove('li-active');
  documentationBtn.classList.remove('li-active');
  componentsBtn.classList.remove('li-active');
  jQuery('.table-text').trigger('update.dot');
});

jQuery(function(){
  jQuery('#specifications-table-col').change(function(){ 
    jQuery('.table_col').hide();
    if (jQuery(this).val() == "1") {      
      jQuery('.table_col_1').show();
    }
    if (jQuery(this).val() == "2") {     
      jQuery('.table_col_2').show();
    }
    if (jQuery(this).val() == "3") {     
      jQuery('.table_col_3').show();
    }
    if (jQuery(this).val() == "4") {     
      jQuery('.table_col_4').show();
    }
    if (jQuery(this).val() == "5") {     
      jQuery('.table_col_5').show();
    }
    if (jQuery(this).val() == "6") {     
      jQuery('.table_col_6').show();
    } 
  })
  jQuery('#components-table-col').change(function(){ 
    jQuery('.table_col').hide();
    if (jQuery(this).val() == "1") {      
      jQuery('.table_col_1').show();
    }
    if (jQuery(this).val() == "2") {     
      jQuery('.table_col_2').show();
    }
    if (jQuery(this).val() == "3") {     
      jQuery('.table_col_3').show();
    }
    if (jQuery(this).val() == "4") {     
      jQuery('.table_col_4').show();
    }
    if (jQuery(this).val() == "5") {     
      jQuery('.table_col_5').show();
    }
    if (jQuery(this).val() == "6") {     
      jQuery('.table_col_6').show();
    } 
  })
})      
   
jQuery(function(){
  jQuery('#input-eng').change(function(){
    if (jQuery(this).prop('checked')){
      jQuery('.language-eng').show();
      jQuery('.language-rus').hide();     
    }    
  })
  jQuery('#input-rus').change(function(){
    if (jQuery(this).prop('checked')){
      jQuery('.language-eng').hide();
      jQuery('.language-rus').show();     
    }    
  })
})  
