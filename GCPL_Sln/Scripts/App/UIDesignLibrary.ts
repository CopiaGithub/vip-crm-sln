// ======================================================= Popup Message Code ======================================

function popupMessage(Message: string, AddClass: string, RemoveClass: string, ShowImg: string, HideImg: string): void {
    $("#message-text").html(Message);
    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
    $(ShowImg).show();
    $(HideImg).hide();
    $("#succeess-message-box").modal("show");
}

// ======================================================= Pagination Code =========================================
function Pagination() {
    debugger;
    var that = this;
    this.incre = 0;
    this.page = 0;
    this.maxPages = 0;
    this.shownItems = [];
    this.ShowBack = false;
    this.ShowNext = true;
    this.gridName = [];
    this.NoOfRecordDropdownValues = [10, 25, 40];
    this.numRecords = this.NoOfRecordDropdownValues[0];

    this.shownItem = function () {
        this.gridName.forEach(function (value, key) {
            that.incre = key + 1;
        });
        this.maxPages = (this.incre / this.numRecords);
        this.ShowNext = this.maxPages > 1 ? true : false;
        this.shownItems = this.gridName.slice(0, this.numRecords);
        return {
            shownItems: this.shownItems,
            ShowBack: this.ShowBack,
            ShowNext: this.ShowNext,
            maxPages: this.maxPages
        }
    }

    this.next = function (maxPages) {
        this.ShowBack = true;
        this.ShowNext = true;
        this.page += 1;
        var begin = this.page * this.numRecords;
        var end = begin + this.numRecords;
        this.shownItems = this.gridName.slice(begin, end);
        if (this.page + 1 >= maxPages) {
            this.ShowNext = false;
        }
        return {
            shownItems: this.shownItems,
            ShowBack: this.ShowBack,
            ShowNext: this.ShowNext
        };
    }

    this.back = function () {
        this.ShowBack = true;
        this.ShowNext = true;
        this.page -= 1;
        var begin = this.page * this.numRecords;
        var end = begin + this.numRecords;
        this.shownItems = this.gridName.slice(begin, end);
        if (this.page < 1) {
            this.ShowBack = false;
        }
        return {
            shownItems: this.shownItems,
            ShowBack: this.ShowBack,
            ShowNext: this.ShowNext
        }
    }
}
// ========================================================= Sorting Code ==========================================
// Ascending code for Grid 
function sortAsc(colName, tHead, gridName) {
    debugger;
    $(".tbl-head").removeClass("tbl-head");
    $("#" + tHead).addClass("tbl-head");

    var ColArrayVal = [];
    var SortedListArray = [];
    var colArray = Object.keys(gridName[0]);
    for (var i = 0; i < colArray.length; i++) {
        if (colName == colArray[i]) {
            for (var j = 0; j < gridName.length; j++) {
                ColArrayVal.push(gridName[j][colName]);
            }
        }
    }

    var tempNum = parseInt(ColArrayVal[0]);
    if (isNaN(tempNum) == true) {
        ColArrayVal.sort();
    }
    if (isNaN(ColArrayVal[0]) == false) {
        ColArrayVal.sort(function (a, b) { return a - b });
    }

    for (var k = 0; k < ColArrayVal.length; k++) {
        for (var l = 0; l < gridName.length; l++) {
            if (ColArrayVal[k] == gridName[l][colName]) {
                SortedListArray.push(gridName[l]);
                gridName.splice(l, 1);
                break;
            }
        }
    }

    gridName = SortedListArray;
    return gridName;
}

// Descending code for Grid
function sortDesc(colName, tHead, gridName) {
    debugger;
    $(".tbl-head").removeClass("tbl-head");
    $("#" + tHead).addClass("tbl-head");

    var ColArrayVal = [];
    var SortedListArray = [];
    var colArray = Object.keys(gridName[0]);
    for (var i = 0; i < colArray.length; i++) {
        if (colName == colArray[i]) {
            for (var j = 0; j < gridName.length; j++) {
                ColArrayVal.push(gridName[j][colName]);
            }
        }
    }

    if (isNaN(parseInt(ColArrayVal[0])) == true) {
        ColArrayVal.sort();
        ColArrayVal.reverse();
    }
    if (isNaN(ColArrayVal[0]) == false) {
        ColArrayVal.sort(function (a, b) { return b - a });
    }


    for (var k = 0; k < ColArrayVal.length; k++) {
        for (var l = 0; l < gridName.length; l++) {
            if (ColArrayVal[k] == gridName[l][colName]) {
                SortedListArray.push(gridName[l]);
                gridName.splice(l, 1);
                break;
            }
        }
    }

    gridName = SortedListArray;
    return gridName;
}

// ====================================================== Download Excel Code ======================================
function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV file
    csvFile = new Blob([csv], { type: "text/csv" });

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}

function exportTableToCSV(filename, ExcelDownloadId) {
    var csv = [];
    var rows = document.querySelectorAll("#" + ExcelDownloadId + " tr");

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++)
            row.push('"' + cols[j].innerHTML + '"');

        csv.push(row.join(","));
    }

    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
}

//Email Regular Expression for Validation
var regexpEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
var regexMobile = new RegExp(/^\d{10}$/);
