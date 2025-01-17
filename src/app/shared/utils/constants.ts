export class Constants {
  public static readonly dataIds = {
    PARKS_LIST: 'parksList',
    CURRENT_PARK: 'currentPark',
    FACILITIES_LIST: 'facilitiesList',
    CURRENT_FACILITY: 'currentFacility',
    PASSES_LIST: 'passesList',
    PASS_SEARCH_PARAMS: 'passSearchParams',
    PASS_LAST_EVALUATED_KEY: 'passLastEvaluatedKey',
    CANCELLED_PASS: 'cancelledPass',
    RESERVATION_OBJECTS_LIST: 'reservationObjectsList',
    CURRENT_RESERVATIONS_OBJECT: 'currentReservationsObj',
    CURRENT_CAPACITY_BAR_OBJECT: 'currentCapacityBarObj',
    ENTER_DATA_URL_PARAMS: 'enter-data-url-params',
    PASS_BREAKDOWN_BY_STATUS: 'pass-breakdown-by-status',
    MODIFIERS: 'modifiers',
  };

  public static readonly ToastTypes: any = {
    SUCCESS: 0,
    WARNING: 1,
    INFO: 2,
    ERROR: 3,
  };

  // luxon weekdays, 1-indexed starting with Monday.
  public static readonly Weekdays: any[] = [
    { id: 7, name: 'Sunday', symbol: 'Su' },
    { id: 1, name: 'Monday', symbol: 'M' },
    { id: 2, name: 'Tuesday', symbol: 'T' },
    { id: 3, name: 'Wednesday', symbol: 'W' },
    { id: 4, name: 'Thursday', symbol: 'Th' },
    { id: 5, name: 'Friday', symbol: 'F' },
    { id: 6, name: 'Saturday', symbol: 'Sa' },
  ];
}
