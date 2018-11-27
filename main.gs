function doGet(e) {
  
  if (e.pathInfo === 'json') {
    var params = JSON.stringify(e);    
    return HtmlService.createHtmlOutput(params);   
  }
   
  const indexHtml = HtmlService.createTemplateFromFile('index.html');
  indexHtml.title = 'ようこそ！';
  indexHtml.visitors = getVisitors();
  addVisitor();
  return indexHtml.evaluate().addMetaTag('viewport', 'width=device-width, initial-scale=1, user-scalable=no');
}

var spreadsheet = SpreadsheetApp.openById('*******************************************');
var dataSheet = spreadsheet.getSheetByName('DATA'); 

function getVisitorsRange() {
  return dataSheet.getRange(1, 1);
}

function getVisitors() {
  return getVisitorsRange().getValue();
}

function addVisitor() {
   getVisitorsRange().setValue(getVisitors() + 1);
}
