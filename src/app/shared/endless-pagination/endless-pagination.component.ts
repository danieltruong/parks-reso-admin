import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-endless-pagination',
  templateUrl: './endless-pagination.component.html',
  styleUrls: ['./endless-pagination.component.scss']
})
export class EndlessPaginationComponent implements OnInit, OnChanges {
  @Input() pageSize = 25;

  @Input() dataSet = [];
  @Input() selectedPage = 1;

  // To be triggered when exclusivestartkey is null
  @Input() endOfList = false;

  @Output() dataToDisplay: EventEmitter<any> = new EventEmitter();
  @Output() requestNextPage: EventEmitter<any> = new EventEmitter();

  public chunkedArray = [];

  constructor() {}

  ngOnInit() {
    this.chunkArray(this.dataSet, this.pageSize);
    console.log(this.chunkedArray);
    this.emitPageData();
  }

  ngOnChanges() {
    this.chunkArray(this.dataSet, this.pageSize);
    this.emitPageData();
  }

  // pushDataIntoStack() {}

  private emitPageData() {
    this.dataToDisplay.emit(this.chunkedArray[this.selectedPage - 1]);
  }

  // pageSizeChange() {}

  nextPage() {
    if (!this.endOfList) {
      this.selectedPage++;
      // If on last available pages and endOfList is not true, request from api for the next page
      // Else grab next chunk
      if (this.selectedPage - 1 === this.chunkedArray.length) {
        this.requestNextPage.emit();
      } else {
        this.emitPageData();
      }
    }
  }

  previousPage() {
    // If not at beginning of list, emit previous chunk
    console.log('GOING BACK', this.selectedPage);
    if (this.selectedPage > 1) {
      this.selectedPage--;
      this.emitPageData();
    }
  }

  private chunkArray(array, chunk_size) {
    console.log('THis is the chunksize', array, chunk_size);
    let tempArray = [];
    if (array.length > 0) {
      for (let index = 0; index < array.length; index += chunk_size) {
        const chunk = array.slice(index, index + chunk_size);
        tempArray.push(chunk);
      }
    }

    // We only want complete pages unless there is no more data to load from Dynamo.
    // if (!this.endOfList && tempArray[tempArray.length - 1].length !== this.pageSize) {
    //   tempArray.pop();
    // }
    this.chunkedArray = tempArray;
    console.log('and here is the chunked array', this.chunkedArray);
  }
}
